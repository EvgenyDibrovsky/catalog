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

    // Создать нового пользователя
    user = new User({
      login,
      email,
      password,
      agreed,
    })

    // Хешировать пароль
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

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
  // TODO: Реализуйте логику сброса пароля.
  // Например: отправьте письмо с ссылкой для сброса пароля на указанный email.
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
