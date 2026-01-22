const express = require("express")

const app = express()

app.use(express.json())


const notes = []

app.post('/notes',(req,res) => {
    res.send("notes created")

    notes.push(req.body)
})


app.get("/notes",(req,res) => {
    res.send(notes)
})





app.listen(3000, () => {
    console.log("server stared")
})