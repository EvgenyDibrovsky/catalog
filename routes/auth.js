const authMiddleware = require('../middleware/authMiddleware'); // замените 'path_to_middleware' на путь к вашему middleware
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // предполагается, что у вас есть контроллеры в этой папке

// Регистрация
router.post('/register', authController.register);

// Авторизация
router.post('/login', authController.login);

// Восстановление пароля
router.post('/reset-password', authController.resetPassword);

// Защищенный маршрут, который требует аутентификацию
router.get('/profile', authMiddleware, authController.getUserProfile);

module.exports = router;
