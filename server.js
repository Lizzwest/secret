const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    console.log("i am groot(root)")
    res.sendFile(__dirname +'/index.html')
})

app.listen(8080, () => console.log("bobadepop"))