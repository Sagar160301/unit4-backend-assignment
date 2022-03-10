

// cluster = "mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const express = require('express')
const req = require('express/lib/request')
const mongoose = require('mongoose')

const app = express()

// express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app
app.use(express.json())

//connect to mongoose
const connect = () => {
    return mongoose.connect("mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

// user schema 
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
    {
        timestamps: true,
        versionKey: false
    })
//create a model for user
const User = mongoose.model("user", userSchema)


// create schema  for post
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }

},
    {
        timestamps: true,
        versionKey: false
    })

//create a model for postSchema
const Post = mongoose.model("post", postSchema)


//create a schema for comment
const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

//create a model for commentschema
const Comment = mongoose.model("comment", commentSchema)



// CRUC OPERATION STARTS HERE 

app.get("/users", async (req, res) => {
    try {
        const users = await User.find({}).lean().exec()
        res.send(users)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body).lean().exec()
        res.status(200).send(user)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        res.status(200).send(user)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})


app.patch("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).lean().exec()
        res.send(user)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.send(user)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})


app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find({}).lean().exec()
        res.status(200).send(posts)
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})


app.post("/posts", async (req, res) => {
    try {


    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.listen(5901, async () => {
    try {
        await connect()
        console.log("Listening to the port 5901")
    }
    catch (err) {
        console.log("err", err)
    }
})
