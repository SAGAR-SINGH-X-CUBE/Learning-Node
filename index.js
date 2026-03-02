const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data',(req,res)=>{
  res.json({
    name: "Sagar",
    age: 22,
    course: "Node.js"
  })
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})