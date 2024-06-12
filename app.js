const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { usermodel } = require("./models/user")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Richi2001:R1CH1R0Y@cluster0.ulfkc.mongodb.net/UserDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    if (input.pswd !== input.cpswd) {
        res.json({ status: "passworderror" })
    } else {
        let user = new usermodel(input)
        console.log(user)
        user.save()
        res.json({ status: "success" })
    }
})

app.get("/view", (req, res) => {
    usermodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            alert(error.message)
        }
    )
})

app.listen(8235, () => {
    console.log("server started")
})