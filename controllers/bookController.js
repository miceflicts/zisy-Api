const Book = require("../models/bookModel")
const asyncHandler = require("express-async-handler")

// Get all Books
const getBooks = asyncHandler(async(req, res) => {
    try{
        const books = await Book.find({});
        res.status(200).json(books);
    } catch(error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Get Books by ID
const getBooksID = asyncHandler(async(req,res) => {
    try{
        const {id} = req.params;
        const books = await Book.findById(id);
        res.status(200).json(books)
        
    } catch(error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Post new books to API
const postNewBooks = asyncHandler(async (req, res) => {
    try{
        const book = await Book.create(req.body);
        res.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        res.status(500);
        throw new Error(error.message)
    }
})

// Update Books per ID
const updateBooks = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);

        // couldn´t find any product in database with X id
        if (!book) {
            res.status(404);
            throw new Error(`No product found with the ID ${id}`)
        }
        const updatedBook = await Book.findById(id)
        res.status(200).json(updatedBook);

    } catch(error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Delete books per ID
const deleteBooks = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book) {
            res.status(404);
            throw new Error(`No product found with the ID ${id}`)
        }
        res.status(200).json(book);

    } catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})

module.exports = {
    getBooks,
    getBooksID,
    postNewBooks,
    updateBooks,
    deleteBooks
}