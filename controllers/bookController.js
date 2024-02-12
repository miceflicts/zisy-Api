const Book = require("../models/bookModel")

// Get all Books
const getBooks = async(req, res) => {
    try{
        const books = await Book.find({});
        res.status(200).json(books);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

// Get Books by ID
const getBooksID = async(req,res) => {
    try{
        const {id} = req.params;
        const books = await Book.findById(id);
        res.status(200).json(books)
        
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

// Post new books to API
const postNewBooks = async (req, res) => {
    try{
        const book = await Book.create(req.body);
        res.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

// Update Books per ID
const updateBooks = async(req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);

        // couldn´t find any product in database with X id
        if (!book) {
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedBook = await Book.findById(id)
        res.status(200).json(updatedBook);

    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

// Delete books per ID
const deleteBooks = async(req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book) {
            res.status(404).json({message: `No product found with the ID ${id}`})
        }
        res.status(200).json(book);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getBooks,
    getBooksID,
    postNewBooks,
    updateBooks,
    deleteBooks
}