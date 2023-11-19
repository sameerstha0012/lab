const express = require('express');
const bookController = require('../controllers/book-controller');
const router = express.Router();


router.get('/', bookController.getAllBook);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.saveBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteById);



module.exports = router;