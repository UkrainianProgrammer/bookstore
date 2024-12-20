const express = require('express');
const Book = require('./book.model');
const { postBook, getAllBooks, getBook, updateBook, deleteBook } = require('./book.controller');
const router = express.Router();

// frontend -> backend server -> controller -> book schema -> database -> send data to the server -> frontend

// post a book
router.post('/create-book', postBook);

// get all books
router.get('/', getAllBooks);

// get single book
router.get('/:id', getBook);

// update book
router.put('/edit/:id', updateBook);

// delete book
router.delete('/delete/:id', deleteBook);

module.exports = router;