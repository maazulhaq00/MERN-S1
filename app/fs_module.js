const fs = require("fs");
const path = require("path");

// writing file
// let writeFile1 = fs.writeFileSync("first.txt", "Hello 2212E1", "utf-8");
// console.log(writeFile1);

// create folder
fs.mkdirSync("docs")

// writing / create file in folder
let filePath = path.join(__dirname, "docs","doc1.txt");
console.log(filePath);

let writeFile2 = fs.writeFileSync(filePath, "Hello World", "utf-8");
console.log(writeFile2);

// read file
let readFileContent1 = fs.readFileSync(filePath, "utf-8")

// // console.log(readFileContent.toString());
console.log(readFileContent1);

// append file
fs.appendFileSync(filePath, "This is next", "utf-8");
fs.appendFileSync(filePath, "\nThis is in next line", "utf-8");


// read file
let readFileContent2 = fs.readFileSync(filePath, "utf-8")

// console.log(readFileContent.toString());
console.log(readFileContent2);

