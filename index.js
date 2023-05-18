const express = require('express')
const bodyParser = require('body-parser')

//local import
const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller')
const {errorHandler} = require('./middlewares')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)


//connection Db
connectDb()
.then( () => {
    console.log("Db connection successfully!")
    app.listen(PORT, () => {
        console.log("server started at " + PORT)
    })
})
.catch(err => {
    console.log("Connection fail! " + err)
})