

const express = require('express')
const app = express()
app.use(express.json())

// *************************** require the all controller  **********************************


const userController = require('./contollers/user.controllers')
const adminController = require('./contollers/admin.controllers')

const connect = require('./config/db')

// ************************************** all midddlewares *********************************************
app.use("/user", userController)
app.use("/admin", adminController)


// ******************************* connect to server ***********************************
app.listen(5901, async () => {
    try {
        await connect()
    }
    catch (err) {
        console.log("message :", err.message)
    }
    console.log("listening to the port number 5901")
})