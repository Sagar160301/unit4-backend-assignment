

const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect("mongodb+srv://Sagar:Sagar@cluster0.tf5oc.mongodb.net/nodeMailer1?retryWrites=true&w=majority")
}

module.exports = connect