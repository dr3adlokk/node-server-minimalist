const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()


app.use(express.static(path.join(__dirname, 'public/')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//no index yet
app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, './index.html'))
})
var PORT = process.env.PORT || 3000

app.listen(PORT, (e)=> {
  if (e) throw e
})
console.log('App served to local host port ' + PORT)