require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const categoriesRoute = require('./routes/categories');
// const authRoutes = require('./routes/auth');
const cors = require('cors'); // You may need to install this using npm

const app = express();

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// Use routes
app.use('/api/categories', categoriesRoute);
// app.use('/api/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Database connection successful.`);
  console.log(`Server is running on port ${PORT}`);
});
