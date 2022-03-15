

const mongoose = require('mongoose')


const checkoutSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true
    },
    checkOutTime: { type: String, required: true, default: "null" },
    checkInTime: { type: String, default: "null" }
})

module.exports = checkoutSchema