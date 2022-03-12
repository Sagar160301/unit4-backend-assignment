

// atals = "mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const express = require('express')

const connect = require('./config/db')

const usercontroller = require('./controllers/user.controllers')
const submissionController = require('./controllers/submission.controllers')
const studentController = require('./controllers/student.controllers')
const batckController = require('./controllers/batch.controllers')
const evaluationController = require('./controllers/evaluation.controllers')

const app = express()
app.use(express.json())

app.use("/user", usercontroller)
app.use("/submission", submissionController)
app.use("/student", studentController)
app.use("/batch", batckController)
app.use("/evaluation", evaluationController)





app.listen(5901, async () => {
    try {
        await connect()
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("listening to the port number 5901")
})