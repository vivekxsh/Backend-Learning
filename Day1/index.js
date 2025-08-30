require('dotenv').config()

const express = require('express')
const app = express()




app.get('/', (req,res) => {
    res.send("Hello world!")
})

app.get('/sharma',(req,res)=>{
    res.send("<i>Sharma is here.</i>")
})

app.get('/login', (req,res)=>{
    res.send('<h1>Login bhai</h1>')
})

app.get('/github',(req,res)=>{
    res.redirect('https://github.com/vivekxsh')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})