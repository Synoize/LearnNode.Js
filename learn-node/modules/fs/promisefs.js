const fs = require('fs')
const path = require('path')

const fileName = 'fsPromiseFile.txt'
const filePath = path.join(__dirname, fileName)

// -------------------------------------
//              Read Directory
// -------------------------------------

// const file = __dirname

// fs.promises
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));


// -------------------------------------
//              Write File
// -------------------------------------

// fs.promises.writeFile(
//     filePath,
//     "This is promise type file data",
//     'utf-8')
//     .then(console.log("File created successfully"))
//     .catch((err) => console.error(err))

// -------------------------------------
//              Read File
// -------------------------------------

// fs.promises.readFile(filePath, 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// -------------------------------------
//              Update File
// -------------------------------------

// fs.promises.appendFile(
//     filePath,
//     "\nThis is promise type of updated file data",
//     'utf-8')
//     .then(console.log("File has been Updated "))
//     .catch((err) => console.log(err))

// -------------------------------------
//              Delete File
// -------------------------------------

// fs.promises.unlink(filePath)
//     .then(console.log("File has been deleted"))
//     .catch((err) => console.log(err))

// -------------------------------------
//              Reanme File
// -------------------------------------

const newFileName = 'updatedFsPromiseFile.txt'
const newFilePath = path.join(__dirname, newFileName)

fs.promises.rename(filePath, newFilePath)
    .then(console.log("File has been renamed"))
    .catch((err) => console.log(err))
