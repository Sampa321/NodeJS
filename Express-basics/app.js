import express from "express"
const app = express()   //app -> object or references
app.use((req, res) =>{
    // res.send("Hello from express js")

    let person = {
        name : "Sampa",
        age : 21
    }
    res.send(person)
})
app.listen(3000)