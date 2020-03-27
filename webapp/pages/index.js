
const express = require('express')
const app = express()

var path = __dirname + '/pages'

var router = express.Router()

app.use('/', router)

router.get('/', function(req, res) {
	res.sendFile(path+'index.html')
})

app.listen(3000)
