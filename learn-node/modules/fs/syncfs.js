const fs = require('fs');
const path = require('path');

// console.log("FS Module: ", fs);

// console.log(fs);

const fileName = "test.txt"
const filePath = path.join(__dirname, fileName)

// -------------------------------------
//              Create File
// -------------------------------------

// const writeFile = fs.writeFileSync(
//     filePath,
//     "This is new file.",
//     'utf-8'
// )

// console.log(writeFile);

// -------------------------------------
//              Read File
// -------------------------------------

// const readFile = fs.readFileSync(filePath, 'utf-8')

// // console.log(readFile.toString());

// console.log("readFile: ", readFile);


// -------------------------------------
//              Update File
// -------------------------------------

// const appendFile = fs.appendFileSync(
//     filePath, 
//     "\nThis is updated file data.",
//     'utf-8'
// )

// console.log("updatedFile: ", appendFile);

// -------------------------------------
//              Delete File
// -------------------------------------

// const deleteFile = fs.unlinkSync(filePath)

// console.log("deleteFile: ", deleteFile);


// -------------------------------------
//              Rename File
// -------------------------------------

const newUpdatedFileName = 'updatedTest.txt'

const newFilePath = path.join(__dirname, newUpdatedFileName)

const renameFile = fs.renameSync(filePath, newFilePath)

console.log('renameFile: ', renameFile);
