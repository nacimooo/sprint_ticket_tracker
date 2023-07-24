const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.listen(port, () => {
    console.log(`server started, listening on port: ${port}`)
})
