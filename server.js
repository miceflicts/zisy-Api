require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bookRoute = require("./routes/bookRoute")

const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes

app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
    res.send("Hello NODE API")
})


mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Node API APP is running on port ${PORT}`)
        })
    }).catch((err) => {
        console.log(err)
    })