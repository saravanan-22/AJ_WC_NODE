const { readFile, writeFile } = require("fs");

readFile("./first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(data);
  const fileOne = data;
  console.log("--------------------------------------------");
  readFile("./second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data);
    let fileTwo = data;
    writeFile(
      "./writeFile.txt",
      `The result : ${fileOne}${fileTwo}\n`,
      { flag: "a" },
      (err, data) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("new file created successfully");
        }
      }
    );
  });
});
