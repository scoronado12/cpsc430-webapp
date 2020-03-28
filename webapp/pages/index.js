
const express = require('express')

const app = express()

var path = __dirname + '/pages/html/'

var router = express.Router()

app.use('/', router)

router.get('/', function(req,res){
    res.sendFile(path+'index.htm')

})

