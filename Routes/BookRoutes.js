import express from 'express';
import bookController from '../Controllers/bookController.js';

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addBook);

export default router;