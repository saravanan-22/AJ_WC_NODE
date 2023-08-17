const  {readFileSync ,writeFileSync} = require("fs");

// const fileOne = readFileSync("./first.txt","utf-8")
// console.log(fileOne);

console.log(readFileSync("./first.txt", "utf-8"));

// const fileTwo = readFileSync("./second.txt","utf-8");
// console.log(fileTwo);

// writeFileSync("writeFile.txt" ,`The result : ${fileOne}${fileTwo}\n`,{flag : "a"});
