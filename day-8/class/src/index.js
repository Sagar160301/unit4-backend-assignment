

const express = require('express')

const connect = require('./server')
const app = express()


app.listen(5901, async () => {
    try {
        return await connect()
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("listening port number 5901")
})