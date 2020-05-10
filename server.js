const express = require('express')
const app = express()
var path = require('path');
const port = 3000

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

