const Book = require('../models/books');

exports.getAllBook = (req, res, next) => { 
    res.json(Book.getAllBooks());
}


exports.getBookById = (req, res) => {
    res.json(Book.getBookById(req.params.id));
}


exports.saveBook = (req, res) => {
    const {title, description, price} = req.body;
    new Book(null, title, description, price).save();
    res.status(201).end();
}

exports.updateBook = (req, res) => {
    const {title, description, price} = req.body;
    const prod = new Book(null, title, description, price);
    prod.id = req.params.id;
    prod.updateById(req.params.id);
    res.status(200).json(prod);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(200).end();
}