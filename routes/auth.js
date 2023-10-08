// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    console.log('Attempting to register a user...');

    const { email, password, name, phone } = req.body;

    // Проверка существующего пользователя
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists.');
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    console.log('Hashing password...');
    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 12);

    console.log('Creating new user...');
    // Создание нового пользователя
    const user = new User({
      email,
      password: hashedPassword,
      name,
      phone,
    });

    await user.save();
    console.log('User saved successfully.');

    // Генерация токена
    console.log('Generating JWT token...');
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Registration completed successfully.');
    res.status(201).json({ token, userId: user.id, message: 'Registration successful' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Something went wrong. Please try again' });
  }
});
module.exports = router;
