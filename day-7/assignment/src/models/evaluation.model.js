
const mongoose = require('mongoose')
const User = require('../models/users.model')
const Batch = require('../models/batch.model')

const evaluationSchema = new mongoose.Schema({
    date_of_evaluation: { type: String, required: true },
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    current_batch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true
    }
})

module.exports = mongoose.model("evaluation", evaluationSchema)