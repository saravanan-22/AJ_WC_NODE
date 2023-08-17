const http = require("http");
const PORT = 5000

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<h1>welcome to node.js</h1>");
    } else if (req.url === "/about") {
        res.end("<h1>Welcome to about page </h1>")
    } else {
        res.end(`<h1>Something went wrong</h1>
                 <a href="/">Back to home page</a>
        `)
    }

});

server.listen(PORT, () => {
    console.log(`Server is running in: http://localhost:${PORT}`);
});