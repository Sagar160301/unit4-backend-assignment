
const express = require('express')
const app = express()

app.get("/user", (req, res) => {
    res.send("Hello")
})

app.listen("4900", () => {
    console.log("hello")
})