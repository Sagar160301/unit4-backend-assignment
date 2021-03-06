

const express = require('express')

const mongoose = require('mongoose')

const app = express()

// app.use(express.json())

const connect = () => {
    return mongoose.connect("mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

const sectionController = require('./controllers/sections.controller')
const authorController = require('./controllers/author.controller')
const bookController = require("./controllers/book.controller")
const checkOutController = require('./controllers/checkout.controllers')

// the controller are the middlewar
app.use("/section", sectionController)
app.use("/author", authorController)
app.use("/book", bookController)
app.use("/checkout", checkOutController)



// df 

app.listen(5901, async () => {
    try {
        console.log("listening port number 5901")
        await connect()
    } catch (err) {
        // res.send({ message: err.message })
        console.log(err.message)
    }
})





// se id 62291da7d266e1cba569b7f8