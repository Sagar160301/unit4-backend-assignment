
const mongoose = require('mongoose')


//create a schema for section
const sectionSchema = new mongoose.Schema({
    sectionName: { type: String, required: true }
},
    {
        timestamps: true,
        versionKey: false
    })

//create a model for section
const Section = mongoose.model("section", sectionSchema)

module.exports = Section