const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  copies: {
    type: String
  },
  
});

module.exports = Book = mongoose.model('book', BookSchema);