'use strict';
const prompt = require('prompt-sync')({sigint: true});
console.log("This is a basic calculator that uses only(+ - * /) opreator");
function calc(num1, op, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch (op) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log("Enter a valid opreator(+ - * /)");
            break;
    }

    
    /*if (op == "+") {
        console.log(num1 + num2);
    }
    else if (op == "-") {
        console.log(num1 - num2);
    }
    else if (op == "/") {
        console.log(num1 / num2);
    }
    else if (op == "*") {
        console.log(num1 * num2);
    }
    else {
        console.log("Enter a valid opreator(+ - * /)");
    }*/
    
}
calc(prompt("Enter a number:"),
prompt("Enter an opreator(+ - * /): "),
prompt("Enter a number:"))