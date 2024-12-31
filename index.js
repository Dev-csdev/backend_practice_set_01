// This code is creating a server

require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {   
    //The callback here is (req, res) => {...} which is executed when a request is received on port 3000.
    res.send('@D3VU_KAUSHIK')
})

app.get('/login', (req, res) => {
    res.send('<h1>login Dev-backend program</h1>')
})

app.get('/youtubie', (req, res) => {
    res.send('<a href="https://www.youtube.com/">yt</a>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
