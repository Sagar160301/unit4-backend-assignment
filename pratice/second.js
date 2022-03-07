
// // console.log(process.argv)

// const fs = require('fs')
// // const file = process.argv;
// console.log(file)

// fs.unlink("sagar.txt", (err) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         console.log("succesfully deleted the file")
//     }
// })


//........................................................................................................................//

// the data colllected from the book.json file
const data = require('./book.json')


const express = require('express')
const app = express()

//the boolArray  is used for sending the data to the user
let bookArray = [];

app.get("/user/:name", logger, (req, res, next) => {
    if (bookArray.length == 0) {
        res.send("No Books Found")
    }
    else {
        res.send(JSON.stringify({ "Books": bookArray }))
    }


})

function logger(req, res, next) {
    let name = req.params.name
    findBook(name)
    next()
}

app.listen("5901", () => {
    console.log("it is the port number 5901")
})


function findBook(name) {
    bookArray = [];
    allBooks = data.books
    allBooks.map(el => {
        let bookName = el.name
        let requiredBook = name.toUpperCase()
        // console.log(requiredBook)

        for (let i = 0; i < bookName.length; i++) {
            if (requiredBook[0] == bookName[i]) {
                let bag = "";
                for (let j = i; j < i + requiredBook.length; j++) {
                    bag += bookName[j]
                }
                if (bag == requiredBook) {
                    let count = 0;
                    for (let k = 0; k < bookArray.length; k++) {
                        // console.log(bookArray[k])
                        if (bookName == bookArray[k].name) {
                            count++
                        }
                    }
                    if (count < 1) {
                        bookArray.push(el)
                    }
                }
            }
        }
    })

}