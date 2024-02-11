const express = require("express")
const mongoose = require("mongoose")
const Book = require("./models/bookModel")
const app = express()

app.use(express.json())

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

mongoose.connect("mongodb+srv://admin:miceflicts123@zisyapi.zqvzvi5.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then(() => {
        app.listen(3000, () => {
            console.log("Node API APP is running on port 3000")
        })
    }).catch((err) => {
        console.log(err)
    })