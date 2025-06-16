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

module.exports = { add, sub, multiply, div }