const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const Book = require("./models/Book")

app.use(cors())
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => { console.log("Connected to db!"); }
)

app.get('/', (req, res) => {
    res.send('express is here')
})

app.get('/api', (req, res) => {

    try {
        Book.find({}, (err, books) => {
            console.log(books)
            res.json(books)
        });
    } catch (err) {
        if (err) return res.status(500).send(err);
    }


    // res.json({
    //     books: [{
    //         title: 'Lapvona',
    //         author: 'Ottessa Moshfegh',
    //         pages: 287,
    //     }, {
    //         title: 'A Little Life',
    //         author: 'Hanya Yanagihara',
    //         pages: 816,
    //     }, {
    //         title: 'No One Is Talking About This',
    //         author: 'Patricia Lockwood',
    //         pages: 207,
    //     }]
    // })
})

app.listen(3001, () => {
    console.log('express is running')
})