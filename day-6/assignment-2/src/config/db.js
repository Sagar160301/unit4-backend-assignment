

const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect("mongodb+srv://Sagar:Sagar@cluster0.hzznv.mongodb.net/kitchen?retryWrites=true&w=majority")
}

module.exports = connect