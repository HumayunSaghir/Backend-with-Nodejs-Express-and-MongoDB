const http = require("http")
var url = require('url');

const myServer = http.createServer((req, res) => {
    // const myUrl = url.parse(req.url, true)
    const myUrl = new URL(req.url, `http://${req.headers.host}`)
    console.log(myUrl)
    // console.log(req.url)
    switch(myUrl.pathname){
        case '/home':
            return res.end("hello from home.")    

        // case '/about':
        //     if(myUrl.query.name === "alex"){
        //         return res.end("showing data about alex.")
        //     }
        //     else{
        //         return res.end("about page")
        //     }

        case '/course':
            if(myUrl.searchParams.name === 'javascript'){
                return res.end("showing results for javascript")
            }
            else{
                return res.end("showing result for courses.")
            }

        default:
            return res.end("unknown path.")
    }
})

const port = 8000

myServer.listen(port, () => console.log(`server is listening at port ${port}`))