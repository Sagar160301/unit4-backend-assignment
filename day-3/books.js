

const express = require('express')
const app = express()
// here the express is function which return a Object

app.get("/book/:name", singleBook, (req, res, next) => {
    console.log(req.name)
    res.send(JSON.stringify({ "bookName": req.name }))
    return res.end()
})

function singleBook(req, res, next) {
    req.name = req.params.name
    next();
}

app.listen("5901", () => {
    console.log("this is the port number 5901")
})