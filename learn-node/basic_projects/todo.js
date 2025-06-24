import { stdin, stdout } from 'process';
import readline from 'readline'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const todos = [];

console.log("=== TODO APP ===");

const showMenu = () => {
    console.log("\n1. Add a Task");
    console.log("2. View all Tasks");
    console.log("3. Exit.");

    rl.question("Choose an Option: ", handleInput)
}

const handleInput = (option) => {
    if (option === '1') {
        rl.question("\nEnter the Task: ", (task) => {
            todos.push(task)
            console.log("Task added: ", task);
            showMenu();
        })
    } else if (option === '2') {
        console.log(`\nYour Task Lists: ${todos.length === 0 && "No task added"} `);
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        })
        showMenu();
    } else if (option === '3') {
        console.log("\nGood Bye 👋");
        rl.close();
    } else {
        console.log("\nInvalid Option. PLease try again!");
        showMenu();
    }
}
showMenu()