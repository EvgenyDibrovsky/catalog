require('dotenv').config(); // <-- Импортируйте и настройте dotenv в начале вашего файла

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const categoriesRoute = require('./routes/categories');

const app = express();
app.use('/api/categories', categoriesRoute);

// Используйте переменную окружения MONGO_URI из .env файла для подключения к MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// TODO: добавить роуты регистрации, авторизации и сброса пароля

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
