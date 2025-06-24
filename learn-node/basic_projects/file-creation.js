import readline from 'readline'
import fs from 'fs'
import { stdin, stdout } from 'process'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const fileCreation = () => {
    rl.question("Enter your filename: ", (filename) => {
        rl.question("Write the content: ", (content) => {
            fs.promises.writeFile(`${filename}.txt`, content, 'utf-8')
                .then(console.log(`File "${filename}.txt" created successfully`))
                .catch(console.log((err) => console.log(err)))
            rl.close();
        })
    })
}
fileCreation()