const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const { login, email, password, agreed } = req.body

    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }

    user = new User({
      login,
      email,
      password, // Здесь мы просто сохраняем исходный пароль, и он будет хеширован в pre-save хуке
      agreed,
    })

    await user.save()

    // Вернуть JWT
    const payload = {
      user: {
        id: user.id,
      },
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

exports.login = async (req, res) => {
  console.log('Request Body:', req.body) // Логируем входные данные

  try {
    const { email, password } = req.body

    // Проверить существует ли пользователь
    let user = await User.findOne({ email })
    if (!user) {
      console.error('User not found') // Логирование ошибки
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }

    // Проверить пароль
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      console.error('Passwords do not match') // Логирование ошибки
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }

    // Вернуть JWT
    const payload = {
      user: {
        id: user.id,
      },
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (err) {
    console.error('Error during login:', err.message) // Логирование ошибки
    res.status(500).send('Server error')
  }
}

exports.resetPassword = async (req, res) => {
  try {
    const { email } = req.body

    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Указанного email нет в нашей базе. Вам необходимо зарегистрироваться.',
          },
        ],
      })
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    const expiryDate = new Date()
    expiryDate.setHours(expiryDate.getHours() + 1)

    user.resetPasswordToken = resetToken
    user.resetPasswordExpires = expiryDate
    await user.save()

    // Создание транспорта для отправки письма
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Например, используем Gmail
      auth: {
        user: process.env.EMAIL_USER, // Ваш email
        pass: process.env.EMAIL_PASS, // Ваш пароль от email
      },
    })

    // Сообщение для отправки
    let mailOptions = {
      from: process.env.EMAIL_USER, // Отправитель
      to: email, // Получатель
      subject: 'Сброс пароля',
      text: `Для сброса пароля перейдите по следующей ссылке: http://yourwebsite.com/reset/${resetToken}`, // Ссылка для сброса пароля
    }

    // Отправка письма
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending the email:', error)
        return res.status(500).send('Ошибка при отправке письма.')
      }
      console.log('Email sent: ' + info.response)
    })

    res.status(200).json({
      msg: 'Мы отправили письмо со ссылкой для сброса пароля на указанный email. Проверьте свою почту.',
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Произошла неизвестная ошибка.')
  }
}

let revokedTokens = [] // Этот список можно хранить в базе данных

exports.logout = (req, res) => {
  // Получите JWT из заголовка авторизации
  const token = req.header('x-auth-token')
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  // Добавьте токен в список отозванных
  revokedTokens.push(token)

  res.status(200).json({ message: 'Logged out successfully' })
}

// Middleware для проверки отзыва токена
exports.checkTokenRevoked = (req, res, next) => {
  const token = req.header('x-auth-token')
  if (revokedTokens.includes(token)) {
    return res.status(401).json({ msg: 'Token has been revoked' })
  }
  next()
}

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}
