
const express = require('express')
const app = express()

const Section = require('../models/sections.model')

const Author = require('../models/authors.model')

const Book = require('../models/books.model')


const crudController = require('./crud.cotroller')
//crud operation for author


app.get("/", async (req, res) => {
    try {
        const book = await Author.find().lean().exec()
        res.send(book)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})

app.post("", crudController(Author).post)

app.get("/:id/section", async (req, res) => {
    try {

        const authors = await Author.find({ section_id: req.params.id }).lean().exec()
        res.status(201).send(authors)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.patch("/:id", async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).send(author)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.delete("/:id", async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id, { new: true }).lean().exec()
        return res.status(201).send(author)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


module.exports = app