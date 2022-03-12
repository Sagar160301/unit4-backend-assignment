
const mongoose = require('mongoose')

const User = require('./users.model')
const Batch = require('./batch.model')

const studentSchema = new mongoose.Schema({
    roll_id: { type: String, required: true },
    student_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    current_batch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model("student", studentSchema)