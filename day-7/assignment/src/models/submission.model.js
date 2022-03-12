

const Evaluation = require('./evaluation.model')
const Student = require('./student.model')
const User = require('../models/users.model')

const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
    evaluation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true
    },
    student_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    },
    marks: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model("submission", submissionSchema)