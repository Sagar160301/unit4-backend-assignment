
const express = require('express')
const app = express()
const book = require('./data.json')
console.log(book)

app.get("/books", allBooks, (req, res, next) => {
    console.log("Fetching all books")
    return res.send(book)
})

function allBooks(req, res, next) {
    next()
}



app.listen("5901", () => {
    console.log("it is the port number 5901")
})