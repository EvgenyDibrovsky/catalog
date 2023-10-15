const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const { login, email, password, agreed } = req.body

    // Проверить, существует ли пользователь
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }

    // Создать нового пользователя (без явного хеширования пароля)
    user = new User({
      login,
      email,
      password,
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
  try {
    const { email, password } = req.body

    // Проверить существует ли пользователь
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    }

    // Проверить пароль
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
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
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

exports.resetPassword = async (req, res) => {
  try {
    const { email } = req.body

    // Проверить, существует ли пользователь
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

    // Генерация токена для сброса пароля (это пример и может потребовать дополнительной настройки)
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    // Сохраните этот токен в вашей модели User (если у вас такой столбец отсутствует, вам нужно будет его добавить)
    const expiryDate = new Date()
    expiryDate.setHours(expiryDate.getHours() + 1)

    user.resetPasswordToken = resetToken
    user.resetPasswordExpires = expiryDate
    await user.save()

    // TODO: Отправьте письмо пользователю с ссылкой для сброса пароля, содержащей resetToken.

    res.status(200).json({
      msg: 'Мы отправили автоматически сгенерированный пароль на указанный email. Проверьте свою почту.',
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Произошла неизвестная ошибка.')
  }
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
