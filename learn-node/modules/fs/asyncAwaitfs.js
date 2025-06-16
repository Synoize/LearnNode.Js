const fs = require('fs/promises')
const path = require('path')

const fileName = 'fsAsyncAwaitFile.txt'
const filePath = path.join(__dirname, fileName)

// -------------------------------------
//              Read Directory
// -------------------------------------

// const readDir = async () => {
//     try {
//         const file = __dirname
//         const res = await fs.readdir(file)

//         if (res) {
//             console.log(res);
//         }

//     } catch (error) {
//         console.error(error);
//     }
// }
// readDir()

// -------------------------------------
//              Write File
// -------------------------------------

// const writeFile = async () => {
//     try {
//         await fs.writeFile(
//             filePath,
//             "This is type of async/await data file ",
//             'utf-8'
//         )
//         console.log("File has been saved");
//     } catch (error) {
//         console.error(error);
//     }
// }
// writeFile()
// -------------------------------------
//              
// -------------------------------------

// const readFile = async () => {
//     try {
//         const res = await fs.readFile(filePath, 'utf-8')
//         if (res) {
//             console.log(res);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
// readFile()

// -------------------------------------
//              Update File
// -------------------------------------

// const updateFile = async () => {
//     try {
//         await fs.appendFile(
//             filePath,
//             "\nThis is type of async/await updated data file ",
//             'utf-8'
//         )

//         console.log("File has been updated");

//     } catch (error) {
//         console.error(error);
//     }
// }
// updateFile()

// -------------------------------------
//              Delete File
// -------------------------------------

// const deleteFile = async () => {
//     try {
//         await fs.unlink(filePath)

//         console.log("File has been deleted");

//     } catch (error) {
//         console.error(error);
//     }
// }
// deleteFile()

// -------------------------------------
//              Rename File
// -------------------------------------

const renameFile = async () => {
    try {
        const newFileName = 'updatedFsAsyncAwaitFile.txt'
        const newFilePath = path.join(__dirname, newFileName)

        await fs.rename(filePath, newFilePath)

        console.log("File has been renamed");
        
    } catch (error) {
        console.error(error);
    }
} 
renameFile()
