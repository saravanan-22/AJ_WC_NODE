const { writeFile } = require("fs/promises"); // Use promises-based fs module

async function writeFileAsync(content) {
    try {
        await writeFile("./hugeFile.txt", content, { flag: "a" });
    } catch (err) {
        console.error(`Error writing file "./hugeFile": ${err.message}`);
    }
}

async function generateFiles() {
    for (let i = 1; i <= 1000000; i++) {
        const content = `This content from for loop: ${i}\n`;
        await writeFileAsync( content);
    }
}

generateFiles();
