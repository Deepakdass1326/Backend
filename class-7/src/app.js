const express = require('express')
const noteModel = require("./models/notes.model")
app = express()
app.use(express.json())


app.post('/notes', async(req, res) => {
   const {title, description} = req.body;
   console.log(title, description);

   await noteModel.create({title, description})

   res.status(201).json({
    message: "note Created",
    
    
   })
})

app.get("/notes",async(req,res) => {
   const notes = await noteModel.find()

   res.status(200).json({
      message: "all notes fetched",
      notes,
   })
})




module.exports = app