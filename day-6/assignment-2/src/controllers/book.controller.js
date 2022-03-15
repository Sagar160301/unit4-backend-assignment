

const app = require('../index')

const Book = require('../models/book.models')



// here you get the all books 
app.get("/", async (req, res) => {
    try {
        let books = await Book.find({}).lean().exec()
        res.send(books)
    }
    catch (err) {
        res.send({ Message: err.Message })
    }
})


// here you get the all books in a particular section 

app.get("/:id", async (req, res) => {
    try {
        let books = await Book.find({ sectionId: req.params.id }).lean().exec()
        res.send(books)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})


// here you also get all books because for checkedOUt book i had created a separate model 
// In the checkedOut collection all checkedOut books stored and remove from the books collection 
app.get("/:id/notCheckedOut", async (req, res) => {
    try {
        let books = await Book.find({ sectionId: req.params.id, }).lean().exec()
        res.send(books)
    }
    catch (err) {
        res.send({ message: err.message })
    }
})





module.exports = app