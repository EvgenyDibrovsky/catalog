const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  id: Number,
  bg: String,
  link_page: String,
  EN: {
    title: String,
    option: [
      {
        type: String,
        value: String,
      },
    ],
  },
  PL: {
    title: String,
    option: [
      {
        type: String,
        value: String,
      },
    ],
  },
  UK: {
    title: String,
    option: [
      {
        type: String,
        value: String,
      },
    ],
  },
  RU: {
    title: String,
    option: [
      {
        type: String,
        value: String,
      },
    ],
  },
});

const Category = mongoose.model('category', categorySchema);
module.exports = Category;
