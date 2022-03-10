
const express = require('express')
const app = express()
const Section = require('../models/sections.model')

const Author = require('../models/authors.model')

const Book = require('../models/books.model')

const crudController = require('./crud.cotroller')

//crud for section

app.get("", async (req, res) => {
    try {
        const sections = await Section.find().lean().exec()
        res.send(sections)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})

app.post("", crudController(Section).post)


app.patch("/:id", async (req, res) => {
    try {

        const section = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        res.send(section)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


app.delete("/:id", crudController(Section).del)

module.exports = app