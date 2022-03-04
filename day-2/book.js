
const express = require('express')
const app = express()

const book = require("./data.json")
console.log(book)

app.get("/books", (req, res) => {
    res.send(book)
    res.end()
})

app.listen("4901", () => {
    console.log(book)
})
