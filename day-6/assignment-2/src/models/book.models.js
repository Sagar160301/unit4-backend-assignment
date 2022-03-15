
const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },

    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    }
})


module.exports = mongoose.model("book", bookSchema)