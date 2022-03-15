

const express = require('express')

const app = express()

app.use(express.json())  //it used for when i post some data to database then it convert the json data to mongoose document

const bookAuthorController = require('./controllers/book_author.controllers')
const bookController = require('./controllers/book.controller')


app.use("/bookAuthor", bookAuthorController)
app.use("/book", bookController)




module.exports = app