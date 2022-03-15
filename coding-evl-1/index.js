

const express = require('express')
const app = express()

app.use(logger)

app.get("/books", (req, res, next) => {
    res.send(JSON.stringify({ route: req.path }))
})



// it is for middleware librarian
app.get("/libraries", checkPermission("librarian"), (req, res, next) => {
    res.send(JSON.stringify({ route: req.path, permission: req.permission }))
})

// it is the middleware for authors
app.get("/authors", checkPermission("author"), (req, res, next) => {
    res.send(JSON.stringify({ route: req.path, permission: req.permission }))
})


function checkPermission(result) {

    return function (req, res, next) {
        if (result == "librarian") {
            req.path = req.path;
            req.permission = true
            next()
        }
        if (result == "author") {
            req.path = req.path;
            req.permission = true
            next()
        }

    }
}



function logger(req, res, next) {
    console.log(req.path)
    req.path = req.path
    next()
}
app.listen("5901", () => {
    console.log("This is the port number 5901")
})