
const express = require('express')
const app = express()

const book = require("./data")
console.log(book)

app.get("/books", (req, res) => {
    res.send(JSON.stringify(book))
    res.end()
})

app.listen("4901", () => {
    console.log(book)
})
