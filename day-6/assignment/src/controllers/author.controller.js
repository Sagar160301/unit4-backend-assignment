
const express = require('express')
const app = express()

const Section = require('../models/sections.model')

const Author = require('../models/authors.model')

const Book = require('../models/books.model')


const crudController = require('./crud.cotroller')
const req = require('express/lib/request')
//crud operation for author


app.get("", async (req, res) => {
    try {
        const author = await Author.find().populate({
            path: "section_id",
            select: ["sectionName"]
        }).lean().exec()
        res.send(author)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})

app.post("", crudController(Author).post)

app.get("/:id/section", async (req, res) => {
    try {

        const authors = await Author.find({ section_id: req.params.id }).populate({
            path: 'section_id',
            select: ["sectionName"]
        }).lean().exec()
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

app.delete("/:id", crudController(Author).del)


module.exports = app