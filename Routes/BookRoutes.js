import express from 'express';
import bookController from '../Controllers/BookController.js';

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addBook);

export default router;