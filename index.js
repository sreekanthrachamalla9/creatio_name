const express = require('express')
const app = express()
const port = 1000



const mainApi = require('./Controllers/router')
app.use('/api',mainApi)

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`)
})