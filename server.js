require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bookRoute = require("./routes/bookRoute")
const errorMiddleware = require("./middleware/errorMiddleware")
const cors = require("cors")
const bodyParser = require('body-parser');

const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(bodyParser.json({ limit: '100mb' }));

// routes
app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
    res.send("Hello NODE API")
})

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(3000, () => {
            console.log(`Node API APP is running on port 3000`)
        })
    }).catch((err) => {
        console.log(err)
    })