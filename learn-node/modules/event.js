// Event Module : EventEmitter is a core module in node.jsused to create and handle custom events.

import EventEmitter from 'events'

// console.log('EventEmitter: ', EventEmitter);

const emitter = new EventEmitter()

emitter.on("greet", (arg) => {
    console.log(`Hello ${arg.username}, \nYou are a ${arg.prof}!`);
})

emitter.emit("greet", { username: "Varsha", prof: "Software Developer" })
