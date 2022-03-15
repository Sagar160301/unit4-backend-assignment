
const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

module.exports = mongoose.model("author", authorSchema)