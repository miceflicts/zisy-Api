const express = require("express")
const {getBooks, updateBooks} = require("../controllers/bookController")
const {getBooksID} = require("../controllers/bookController")
const {postNewBooks} = require("../controllers/bookController")
const {deleteBooks} = require("../controllers/bookController")

const router = express.Router()

router.get("/", getBooks)

router.get("/:id", getBooksID)

router.post("/", postNewBooks)

router.put("/:id", updateBooks)

router.delete("/:id", deleteBooks)

module.exports = router;