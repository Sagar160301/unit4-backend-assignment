
const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, required: true },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)
// create a model for author
const Author = mongoose.model("author", authorSchema)

module.exports = Author