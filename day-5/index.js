
const express = require("express")

const mongoose = require("mongoose")

const app = express()

// conoect to mongodb 
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/sagar")
}

const userSchema = mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String

})

const User = mongoose.model("user", userSchema)

app.get("/users", async (req, res) => {
    const data = await User.find({}).limit(10).lean().exec()
    res.status(200).send(data)
    // console.log(data)
})


app.listen(5901, async () => {
    await connect()
    console.log("listening the port number 5901")
})