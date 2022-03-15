

const express = require('express')
const res = require('express/lib/response')

const app = express()
const CheckOut = require('../models/checkout.models')


app.get("/", async (req, res) => {
    try {
        const checkout = await CheckOut.find({}).lean().exec()
        res.send(checkout)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})

app.post("/", async (req, res) => {
    try {
        let checkout = await CheckOut.create(req.body)
        check(req.body)
        // res.send(checkout)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})


async function check(body) {
    let che = await CheckOut.find({ boodId: body.bookId }).lean().exec()
    if (che) {
        if ((che.chekOuttime == "null" && checkIntime == "null") || (che.chekOuttime == "" && che.checkIntime == "")) {
            let book = await CheckOut.update({ bookId: id }, { checkOutTime: body.checkOutTime }, { new: true })
            res.send(book)
        }
        else if (che.checkOutTime != "null" && che.checkIntime == "null") {
            res.send("book is not avilable")
        }
    }
    else {
        let book = await checkout.create(req.body)
        res.send(book)
    }
}

module.exports = app