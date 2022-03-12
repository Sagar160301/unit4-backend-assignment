
const express = require('express')
const router = express.Router()
const User = require('../models/users.model')




// *********************get the all data to the user ****************//
router.get("/", async (req, res) => {
    try {
        const users = await User.find({}).lean().exec()
        res.status(201).send(users)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

//   **************** it is the post method *************************//
router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})


module.exports = router