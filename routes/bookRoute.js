const express = require("express")
const {getBooks: getAllBooks, updateBooks} = require("../controllers/bookController")
const {getBooksID} = require("../controllers/bookController")
const {postNewBooks} = require("../controllers/bookController")
const {deleteBooks} = require("../controllers/bookController")

const router = express.Router()

router.get("/", getAllBooks)

router.get("/:id", getBooksID)

router.post("/", postNewBooks)

router.put("/:id", updateBooks)

router.delete("/:id", deleteBooks)

module.exports = router;