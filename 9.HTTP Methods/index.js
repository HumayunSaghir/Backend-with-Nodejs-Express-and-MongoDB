const http = require('http')
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    // preparing the data to be appended.
    const data = `new request recieved by method ${req.method}\n`
    
    // appending the data to the file.
    fs.appendFile("./logs.txt", data, (err) => {
        if(err){
            console.log("error in appending data in logs.")
        }
    })

    // returning response from the server
    return res.end("hello from server")
})

const port = 8000

myServer.listen(port, () => console.log(`server is listening at port ${port}`))