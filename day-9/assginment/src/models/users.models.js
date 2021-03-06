

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    pincode: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String,enum:["Male","Female","Others"], required: true }
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model("user", userSchema)