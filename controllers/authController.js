const User = require('../models/user'); // ваша модель пользователя
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { login, email, password } = req.body;

    // Проверка существующего пользователя
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Хеширование пароля
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ login, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.status(200).json({ msg: 'User logged in successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.resetPassword = (req, res) => {
  // Здесь будет логика для восстановления пароля, например, отправка письма на почту и т.д.
  res.status(501).send('Not implemented yet');
};
