const http = require("http")
const fs = require('fs')

const myServer = http.createServer((req, res) => {
    // console.log("request recived")

    // creating logs for the server
    const data = `new req recieved at ${req.url} by method ${req.method}\n`
    fs.appendFile("./logs.txt", data, (err) => {
        if(err){
            console.log("error in appending data to the file!")
        }
    })

    // response
    switch(req.url){
        case "/":
            return res.end("homepage.")
            
        case '/about':
            return res.end("about page.")

        default:
            return res.end("error occured!")
    }
})

const port = 8000

myServer.listen(port, () => console.log(`server is listening at port ${port}`))