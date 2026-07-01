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







// let product = {
//     "name" : "dress",
//     "Price" : 3000
// }

// app.get("/Home",(req,res)=>{
//     res.send("It is Home page!!")
// })

// app.get("/about",(req,res)=>{
//     res.send("It is about page!!")
// })

// app.get("/skill",(req,res)=>{
//     res.send("It is skill page!!")
// })

// app.get("/product",(req,res)=>{
//     // res.send("It is product page!!")
//     res.send(product)
// })






const fn = (req,res,next)=>{
    //res.send("welcome")
    console.log("welcome");
    next()
}

const fn2 = (req,res,next)=>{
    //res.send("welcome fn2")
    console.log("Welcome fn2");
    next()
}

const fn3 = (req,res)=>{
    res.send("welcome fn3")
}

app.get("/",fn,fn2,fn3)

//OR,
//app.get("/",fn)
//app.get("/",fn2)
//app.get("/",fn3)





// let users = []
// app.get("/signup",(req,res)=>{
//     users.push(req.body)
//     res.status(201).send("received")
// })

// app.get("/users", (req,res)=>{
//     res.send(users)
// })


// app.get("/delete",(req,res)=>{
//     users = []
//     req.send("users deleted")
// })

// app.get("/login",(req,res)=>{
//     let name = req.body.name
//     let password = req.body.password

//     for(let user of users)
//     {
//         if(user.name == name && user.password == password)
//         {
//             return res.send("Login successfull")
//         }
//     }
//     return res.status(401).send("Login failed")
// })

app.listen(3000,()=>{
    console.log("Server is running on port 30000");
    console.log("Hello");
    
})