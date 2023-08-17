const http = require("http");
const PORT = 5000;

const server = http.createServer();

server.on("request", (req, res) => {
    res.end("<h1>This message form emitter</h1>")
})

server.listen(PORT, () => {
    console.log(`server is running in : http://localhost:${PORT}`);
})