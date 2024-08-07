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

let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display = display + button.value;
    })
})