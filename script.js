let number1 = 0;
let number2 = 0;
let operatorCall = "";

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

// only allow 0 after decimal or leading number
function handleZero(key, display) {
    if (key.value == 0) {
        if (parseFloat(display) == 0) {
            if (!display.includes(".")) {
                return false;
            }
        }
        return true;
    } else {
        return true;
    }
}

// only allow a single decimal
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
        // check zero and decimal handle cases
        if (!handleZero(key, display) || !handleDecimal(key, display)) {
            return;
        // if no leading numbers or decimal
        } else if (display[0] == 0 && !display.includes(".")) {
            // add leading 0 if first key is decimal
            if (key.value == ".") {
                display = "0.";
                updateDisplay(display);
            } else {
                // replace placeholder 0 with first number
                display = key.value;
                updateDisplay(display);
            }
        } else {
            // concat display with key
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

function nestedCalculation(operator) {
    number2 = parseFloat(display);
    // if operator has not already been pressed
    if (operatorCall == "") {
        operatorCall = operator.value;
    }
    number1 = operate(number1, number2, operatorCall);
    number2 = 0;
    operatorCall = "";
    display = "0";
    updateDisplay(number1);
}

/* function handleEqual() {
    if (number1 == "" || number2 == "") {
        return;
    } else {
        number1 = operate(number1, number2, operatorCall);
        number2 = 0;
        operatorCall = "";
        display = "0";
        updateDisplay(number1);
    }
} */

let operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (parseFloat(display) == 0) {
            return;
        } else if (operator.value == "=") { 
            handleEqual();
        } else if (number1 != 0) {
            nestedCalculation(operator);
        } else {
        number1 = parseFloat(display);
        operatorCall = operator.value;
        display = "0";
        updateDisplay(display);
        }
    })
}) 
