require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const Book = require("./models/bookModel")
const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.get("/", (req, res) => {
    res.send("Hello NODE API")
})

app.get("/books", async(req, res) => {
    try{
        const books = await Book.find({});
        res.status(200).json(books);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

app.get("/books/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const books = await Book.findById(id);
        res.status(200).json(books)
        
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/books", async (req, res) => {
    try{
        const book = await Book.create(req.body);
        res.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// update books
app.put("/books/:id", async(req, res) => {
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
})

// delete books
app.delete("/books/:id", async(req,res) => {
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
})

mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Node API APP is running on port ${PORT}`)
        })
    }).catch((err) => {
        console.log(err)
    })