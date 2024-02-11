const express = require("express")
const mongoose = require("mongoose")
const app = express()

// routes
app.get("/", (req, res) => {
    res.send("Hello NODE API")
})

app.get("/books", (req, res) => {
    res.send("Hello NODE BOOKS")
})

mongoose.connect("mongodb+srv://admin:miceflicts123@zisyapi.zqvzvi5.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then(() => {
        app.listen(3000, () => {
            console.log("Node API APP is running on port 3000")
        })
    }).catch((err) => {
        console.log(err)
    })