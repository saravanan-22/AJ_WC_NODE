const {createReadStream, readFile} = require("fs");
const http = require("http");

const server = http.createServer((req,res) => {
    const stream = createReadStream("./hugeFile.txt", "utf-8", { highWaterMark: 80000 })
    stream.on("open",() => {
        stream.pipe(res);
    });
});


server.listen(5000, () =>{
    console.log(`server is running in : http://localhost:5000`);
   
})

server.on("error" ,(err) => {
    console.log(err.message);
})