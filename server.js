const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const morgan = require("morgan")
const studentRouter = require('./src/routes/student.Router')
const sequelize = require('./src/config/dbConfig')

sequelize.authenticate().then((success)=>{
    console.log('connected to db succesfully')
}).catch((error)=>{
    console.log('failed to connect to db')
})

app.use(morgan("tiny"))
app.set("views",path.join(__dirname,"src/views"))
app.set("view-engine","ejs")

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.use('/students',studentRouter)

app.listen(port,()=>{
    console.log(`Express app running on port http://localhost:${port}`)
})