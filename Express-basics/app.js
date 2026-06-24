import express from "express"
const app = express()   //app -> object or references

// app.use((req, res) =>{
//     // res.send("Hello from express js")

//     // let person = {
//     //     name : "Sampa",
//     //     age : 21
//     // }
//     // res.send(person)
   
//     //res.sendFile("C:\\Backend\\Node-js\\Express-basics\\index.html")

// })


let product = {
    "name" : "dress",
    "Price" : 3000
}

app.get("/Home",(req,res)=>{
    res.send("It is Home page!!")
})

app.get("/about",(req,res)=>{
    res.send("It is about page!!")
})

app.get("/skill",(req,res)=>{
    res.send("It is skill page!!")
})

app.get("/product",(req,res)=>{
    // res.send("It is product page!!")
    res.send(product)
})

app.listen(3000,()=>{
    console.log("Server is running on port 30000");
    console.log("Hello");
    
})