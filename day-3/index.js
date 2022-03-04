
const express = require('express')
const app = express();

// app.use(logger)



app.get("/user", logger("sagar"), (req, res) => {
    res.send("collect your data")
})

function logger(req, res, next) {
    if (arguments === "sagar") {
        next();
    }
}

app.listen("5000", () => {
    console.log("listen the port 5000")
})

console.log("sagar")