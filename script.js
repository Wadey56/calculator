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

let display = "0";
function updateDisplay(update) {
    document.querySelector("#display").textContent = update;
}

function handleZero(key, display) {
    if (key.value == 0) {
        if (parseFloat(display) == 0) {
            if (!display.includes(".")) {
                return false;
            }
        }
        return true;
    } else if (key.value != 0) {
        return true;
    }
}

function handleDecimal(key, display) {
    if (key.value == "." && !display.includes(".")) {
        return true;
    } else if (key.value != ".") {
        return true;
    } else {
        return false;
    }
}

let keys = document.querySelectorAll(".key")
keys.forEach(key => {
    key.addEventListener("click", () => {
        if (!handleZero(key, display) || !handleDecimal(key, display)) {
            return;
        } else if (display[0] == 0 && !display.includes(".")) {
            if (key.value == ".") {
                display = "0.";
                updateDisplay(display);
            } else {
                display = key.value;
                updateDisplay(display);
            }
        } else {
            display = display + key.value;
            updateDisplay(display);
        } 
    })
})

document.querySelector("#clear").addEventListener("click", () => {
    display = "0";
    number1 = 0;
    number2 = 0;
    updateDisplay(display);
})

/* 
let operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (parseFloat(display) == 0) {
            return;
        }
        if (number1 != 0) {
            number2 = parseFloat(display);
            number1 = operate(number1, number2, operator.value);
            updateDisplay(number1);
        }
        number1 = parseFloat(display);
        updateDisplay("0")
    })

}) 
*/