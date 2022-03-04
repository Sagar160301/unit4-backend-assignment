

const express = require('express')
const app = express()
// here the express is function which return a Object

app.get("/book/:name", bookName, (req, res, next) => {
    res.send({ "bookName": req.name })
    return res.end()
})

function bookName(req, res, next) {
    req.name = req.params.name
    next();
}

app.listen("5901", () => {
    console.log("this is the port number 5901")
})