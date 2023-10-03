const express = require('express');
const router = express.Router();
const Category = require('../models/category'); // Путь до вашей модели

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    console.log('Categories retrieved:', categories); // Этот лог покажет вам, что именно было извлечено
    res.json(categories);
  } catch (err) {
    console.error('Error retrieving categories:', err); // Этот лог поможет вам видеть ошибки, если они возникают
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
