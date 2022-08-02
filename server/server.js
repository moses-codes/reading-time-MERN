const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get('/', (req, res) => {
    res.send('express is here')
})

app.get('/api', (req, res) => {
    res.json({
        books: [{
            title: 'Lapvona',
            author: 'Ottessa Moshfegh',
            pages: 287,
        }, {
            title: 'A Little Life',
            author: 'Hanya Yanagihara',
            pages: 816,
        }, {
            title: 'No One Is Talking About This',
            author: 'Patricia Lockwood',
            pages: 207,
        }]
    })
})

app.listen(3001, () => {
    console.log('express is running')
})