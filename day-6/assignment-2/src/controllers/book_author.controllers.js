

const BookAuthor = require("../models/book_author.models")

const app = require('../index')

app.get('/', async (req, res) => {
    try {
        let books = await BookAuthor.find({}).lean().exec()
        // .lean() is used for convert the mongoose document to normal object
        // .exec() is used for return the full promise if i don.t use exec() then it will return a half promise
        res.send(books)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})



app.get("/:id", async (req, res) => {
    try {
        let books = await BookAuthor.find({ authorId: req.params.id }).lean().exec()
        res.send(books)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})

app.get("/:a_id/section/:s_id", async (req, res) => {
    try {
        let books = await BookAuthor.find({ $and: [{ authorId: req.params.a_id }, { sectionId: req.params.s_id }] }).populate({
            path: 'bookId'
        }).lean().exec()
        res.send(books)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})



module.exports = app