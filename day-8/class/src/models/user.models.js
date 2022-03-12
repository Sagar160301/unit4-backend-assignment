


const express = require('express')
const { default: mongoose } = require('mongoose')
const route = express.Router()


const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    ip_address: { trye: Number }
})



// "id" : 1,
// "first_name" : "Rory",
// "last_name" : "Turbitt",
// "email" : "rturbitt0@hhs.gov",
// "gender" : "Male",
// "ip_address" : "9.208.205.111"