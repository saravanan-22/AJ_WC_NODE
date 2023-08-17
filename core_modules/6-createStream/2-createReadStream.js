const {createReadStream} = require("fs");

const stream = createReadStream ("./hugeFile.txt","utf-8",  { highWaterMark: 80000 });

stream.on("data",(result) => {console.log(result)});