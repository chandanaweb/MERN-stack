const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

var path = require('path')
const port = process.env.PORT || 3000

require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const uri=process.env.uri
mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true})

const connection = mongoose.connection
connection.once('open',()=> {
	console.log('MongoDB database connection established successfully')
})

app.listen(console.log(`Example app listening at http://localhost:${port}`))

