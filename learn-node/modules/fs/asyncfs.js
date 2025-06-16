const fs = require('fs')
const path = require('path')

const fileName = 'fsAsync.txt'
const filePath = path.join(__dirname, fileName)

// -------------------------------------
//              Write File
// -------------------------------------

fs.writeFile(
    filePath,
    "This is async file data",
    'utf-8',
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File has been saved");
        }
    }
)

// -------------------------------------
//              Read File
// -------------------------------------

// fs.readFile(
//     filePath, 
//     'utf-8',
//     (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(data);
//         }
//     }
// )

// -------------------------------------
//              Update File
// -------------------------------------

// fs.appendFile(
//     filePath,
//     "\nThis is updated async file data",
//     'utf-8',
//     (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log("File has been updated");
//         }
//     }
// )

// -------------------------------------
//              Delete File
// -------------------------------------

// fs.unlink(filePath, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File has been deleted");
//     }
// })

// -------------------------------------
//              Rename File
// -------------------------------------

const newFileName = "updatedFsAsync.txt"

const newFilePath = path.join(__dirname, newFileName)

fs.rename(
    filePath,
    newFilePath,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File has been renamed");
        }
    }
)
