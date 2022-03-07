

const express = require('express')
const app = express()


app.get("/user/:name", logger("roman"), (req, res, next) => {
    res.send(JSON.stringify({ "bookName": req.name }))
})


function logger(roman) {
    return function (req, res, next) {
        if (req.params.name == roman) {
            req.name = "Roman Reigns"
        }
        else if (req.params.name == "dean") {
            req.name = "Dean Ambrose"
        }
        else {
            req.name = "Not Found"
        }
        next()
    }
}

app.listen("5901", () => {
    console.log("this is the port number 5901")
})