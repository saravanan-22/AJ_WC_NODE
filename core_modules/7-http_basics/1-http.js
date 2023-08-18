const { createServer } = require("http");

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<h1>This is a home page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<h1>This is a about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-Type": "text/html" });
    res.write(`<h1>Something went wrong Page not found</h1>
        <a href="/">Click here to go home page</a>`);
        res.end();
  }
});


server.listen(5000 , () => {
    console.log("Server is running in: http://localhost:5000");
})

server.on("error", (err) => {
    console.log(err.name);
})