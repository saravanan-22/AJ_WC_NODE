const {createServer} = require("http");
const {readFileSync} = require("fs")
const PORT = 5000;

const htmlFile = readFileSync("./P3_Hamburgermenu/index.html", "utf-8");
const cssFile = readFileSync("./P3_Hamburgermenu/style.css", "utf-8");
const jsFile = readFileSync("./P3_Hamburgermenu/script.js", "utf-8");


const server = createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {"content-Type" : "text/html"});
        res.write(htmlFile);
        res.end();
    } else if (req.url === "/style.css"){
        res.writeHead(200, {"content-Type" : "text/css"});
        res.write(cssFile);
        res.end();
    }
    else if (req.url === "/script.js"){
        res.writeHead(200, {"content-Type" : "text/javascript"});
        res.write(jsFile);
        res.end();
    }else{
        res.writeHead(404, {"content-Type" : "text/html"});
        res.write(`<h1>Page not found</h1>
        <a href="./">Click here to go home page </a>`);
        res.end();
    }
    
});




server.listen(PORT , () => {
    console.log("Server is running in: http://localhost:5000");
})


server.on("error" , (err) => {
    console.log(err.name);
})