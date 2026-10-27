const express = require("express");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 8000;

//middleware/proxy
app.use(cors())
app.use(express.json())

const users =[
    {id: 1, name: "John Doe", email: "john@gmail.com"},
    {id: 2, name: "siam Doe", email: "john@gmail.com"},
    {id: 3, name: "flora Doe", email: "john@gmail.com"},
    {id: 4, name: "Karim Doe", email: "john@gmail.com"},
    {id: 5, name: "Rahim Doe", email: "john@gmail.com"},
]

app.get("/", (req, res)=>{
    res.send("Hello from home world")
})
app.get("/users", (req, res)=>{
    res.send(users)
})

app.post("/users", (req, res)=>{
    console.log("data in the request", req.body)

    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)

    res.send({success: true, data: newUser, message:"Users added successfully."})
})

app.get("/products", (req, res)=>{
    res.send("Hello from products world")
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})