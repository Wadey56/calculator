let number1 = 0;
let number2 = 0;
let operator = "";

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
function updateDisplay(update) {
    document.querySelector("#display").textContent = update;
}

let keys = document.querySelectorAll(".key")
keys.forEach(key => {
    key.addEventListener("click", () => {
        if ((key.value == 0 && parseFloat(display) == 0 )) {
            if (!display.includes(".")) {
                return;
            }
        }
        if (key.value == "." && display.includes(".")) {
            return;
        }
        display = display + key.value;
        number1 = parseFloat(display);
        updateDisplay(display);
    })
})

document.querySelector("#clear").addEventListener("click", () => {
    display = "";
    number1 = null;
    number2 = null;
    updateDisplay(display);
})

let operators = document.querySelector(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (isNaN(parseFloat(display)) || number1 === undefined) {
            return;
        }
        number1 = parseFloat(display)
        number2 = parseFloat(display)
    })

})