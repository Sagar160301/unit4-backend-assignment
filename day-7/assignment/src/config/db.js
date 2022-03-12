


const mongoose = require('mongoose')



const connect = () => {
    return mongoose.connect("mongodb+srv://Sagar:Sagar@cluster0.lhslq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect