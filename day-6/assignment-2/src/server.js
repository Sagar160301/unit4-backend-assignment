

const app = require('./index')

const connect = require("./config/db")
const res = require('express/lib/response')


app.listen(5901, async () => {
    try {
        await connect()
    }
    catch (err) {
        console.log(err.message)
    }
})