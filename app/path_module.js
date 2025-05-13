const path = require('path');

console.log(__dirname);
console.log(__filename);

// myfolder/work.txt

let filePath = path.join("myFolder", "work.txt")

let parsedData = path.parse(filePath)
let fullResolvedPath = path.resolve(filePath)
let ext = path.extname(filePath)
let basename = path.basename(filePath)
let dirname = path.dirname(filePath)
let separator = path.sep

let output = {
    filePath,
    parsedData,
    fullResolvedPath,
    ext,
    basename,
    dirname,
    separator
}

console.log(filePath);
console.log(output);

/*

path.parse(): Returns an object with details about a given path, including root, dir, base, ext, and name.
path.join(): Joins multiple path segments into one, using the appropriate separator (\ on Windows, / on Linux/macOS).
path.resolve(): Resolves a sequence of paths into an absolute path, starting from the current working directory.
path.extname(): Extracts the file extension from a given path (e.g., .txt, .js).
path.basename(): Returns the last part of a path (e.g., the file name with extension).
path.dirname(): Returns the directory part of a path (excluding the file name).
path.sep: Returns the platform-specific path segment separator (\ for Windows, / for Linux/macOS).

*/