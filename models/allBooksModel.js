const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {

    },
    {
        timestamps: true,
    }
);

const AllBooks = mongoose.model("AllBooks", bookSchema);

module.exports = AllBooks;
