const express = require('express');
const router = express.Router();

// TODO: добавить контроллеры и middleware

router.post('/register', (req, res) => {
  // Реализация регистрации
});

router.post('/login', (req, res) => {
  // Реализация авторизации
});

router.post('/reset-password', (req, res) => {
  // Реализация сброса пароля
});

module.exports = router;
