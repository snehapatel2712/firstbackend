require('dotenv').config()


const express = require('express')

const app = express()
const port = 4000


app.get('/login',(req,res) => {
  res.send('<h1>Please login at my website</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})