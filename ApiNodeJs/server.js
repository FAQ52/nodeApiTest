const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{

    const data = fs.readFileSync(`${__dirname}/httpserver/userAPI/userApi.json`, "utf-8");
    const objData = JSON.parse(data);

    if(req.url == "/") {
        res.end("Hello from the other side");
    } else if (req.url == "/about") {
        res.end("Hello from the About US side");
    } else if (req.url == "/contact") {
        res.end("Hello from the Contact US side");
    } else if (req.url == "/userapi") {
        res.writeHead(200, {"content-type": "application/json"});
        res.end(objData[0].name);
    } else {
        res.writeHead('404', {'Content-Type': 'text/html'});
        res.end("<h1> 404 error pages. Page doesn't exist </h1>")
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port 8000");
});