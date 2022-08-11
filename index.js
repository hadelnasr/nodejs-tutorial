const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({"id": 1, "name": "Haytham"}))
});

server.listen(3001, () => {
    console.log("Server is now listening ....")
});