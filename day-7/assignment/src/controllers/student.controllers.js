

const express = require('express')
const router = express.Router()

const Student = require('../models/student.model')

// *********************get the all data to the user ****************//
router.get("/", async (req, res) => {
    try {
        const users = await Student.find({}).lean().exec()
        res.status(201).send(users)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

//   **************** it is the post method *************************//
router.post("/", async (req, res) => {
    try {
        const user = await Student.create(req.body)
        return res.status(201).send(user)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})


module.exports = router