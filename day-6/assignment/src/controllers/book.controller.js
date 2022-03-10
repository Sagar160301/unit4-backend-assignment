
const express = require('express')
const app = express()

const Section = require('../models/sections.model')

const Author = require('../models/authors.model')

const Book = require('../models/books.model')

const crudController = require("./crud.cotroller")

// crud operration for book 

app.get("/", async (req, res) => {
    try {
        const book = await Book.find().lean().exec()
        res.send(book)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})


app.post("", crudController(Book).post)
app.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).lean().exec()
        return res.status(200).send(book)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})




app.get("/:id/section", async (req, res) => {
    try {
        const books = await Book.find({ section_id: req.params.id }).lean().exec()
        return res.status(201).send(books)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.get("/:id/author", async (req, res) => {
    try {

        const books = await Book.find({ author_id: req.params.id }).lean().exec()
        res.status(201).send(books)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.patch("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        return res.status(201).send(book)
    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
})
app.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send(book)
    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
})


module.exports = app