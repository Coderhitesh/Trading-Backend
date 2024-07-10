const express = require('express')
const app = express()
require("dotenv").config()
const ConnectDB = require('./config/db')
const Router = require('./Routes/Routes')
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extends:true}))
ConnectDB()


const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded( { extended: true })) // parse application/

app.use('/api/v8',Router)

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})
