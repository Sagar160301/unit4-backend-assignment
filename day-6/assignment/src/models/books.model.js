
const mongoose = require('mongoose')

// create a schema for books 
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })
//create a model for book
const Book = mongoose.model("book", bookSchema)

module.exports = Book