// common.js
const add = (a, b) => {
    return `Addition is ${a + b}`
}

const sub = (a, b) => {
    return `Subtraction is ${a - b}`
}

const multiply = (a, b) => {
    return `Multiply is ${a * b}`
}

const div = (a, b) => {
    return `Division is ${a / b}`
}

export default { add, sub, multiply, div } // ESModules

// module.exports = { add, sub, multiply, div } //common js