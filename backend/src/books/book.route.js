const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks } = require('./book.controller');
const router = express.Router();

// frontend -> backend server -> controller -> book schema -> database -> send data to the server -> frontend

// post a book
router.post('/create-book', postABook);

// get all books
router.get('/', getAllBooks);

module.exports = router;