let firstNumber;
let secondNumber;
let operator;

function add(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return parseFloat((number1 + number2).toFixed(7));
}

function subtract(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return parseFloat((number1 - number2).toFixed(7));
}

function multiply(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return parseFloat((number1 * number2).toFixed(7));
}

function divide(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return parseFloat((number1 / number2).toFixed(7));
}

function operate(number1, number2, operator) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
    }
}

let display = "";

let keys = document.querySelectorAll(".key")

keys.forEach(key => {
    key.addEventListener("click", () => {
        if (key.value == 0 && display[0] === undefined) {
            return;
        }
        if (key.value == "." && display.includes(".")) {
            return;
        }
        display = display + key.value;
        document.querySelector("#display").textContent = display;
    })
})

document.querySelector("#clear").addEventListener("click", () => {
    display = "";
    document.querySelector("#display").textContent = display;
})