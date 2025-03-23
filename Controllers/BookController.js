import  BookModel from '../Models/BookModel.js';

const bookController = {
  async getAllBooks(req, res) { 
    try {
      const books = await BookModel.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }, 
  async getBookById(req, res) { 
    try {
      const { id } = req.params;
      const book = await BookModel.getBookById(id);
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }, 
  async addBook(req, res) { 
    try {
      const book = req.body;
      const newBook = await BookModel.addBook(book);
      res.json(newBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }, 
  
};

export default bookController;