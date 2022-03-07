
const express = require('express')
const data = require('./data.json')
console.log(data)

const app = express()

app.get("/user/:name", logger("roman"), (req, res, next) => {
    console.log("before logger")
    // res.send(data)

    res.send({ "Name": req.params.name })
    console.log("after logger")
})

function logger(roman) {
    return function (req, res, next) {
        console.log("before next function")
        console.log(req.params.name)
        next()
        console.log("after next function")
    }
}


app.listen("5901", () => {
    console.log("it is the port number 5901")
})