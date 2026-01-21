const express = require('express')

const app = express()


app.get('/', (req, res) => {
   res.send('Hello this server is running')
})

app.get('/about',(req, res) => {
  res.send('this is about')
})

app.get('/course',(req, res) => {
  res.send('this is for courses')
})


app.listen(3000,() => {
    console.log("Server Started");
    
})



//COntribution test