const express = require("express")
const http = require("http")

const app = express()
const port = 8000

const myServer = http.createServer(app)

app.get("/", (req, res) => {
    return res.send("welcome to homepage.")
})

app.get("/about", (req, res) => {
    return res.send(`welcome to about page hey ${req.query.name}`);
});

app.listen(port, () => console.log(`server is listening at port ${port}`))