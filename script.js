let number1 = 0;
let number2 = 0;
let operatorCall1 = "";
let operatorCall2 = "";
let nested = false

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

function allowZero(display) {
    // only allow 0 if the display has a leading key
    if (display != "0") {
        display = display + "0";
        updateDisplay(display);
        return display;
    }
}

// only allow a single decimal
function allowDecimal(display) {
    if (!display.includes(".")) {
        // add leading 0 if first key is decimal
        if (display[0] == 0) {
            display = "0.";
            updateDisplay(display)
        } else {
            display = display + ".";
            updateDisplay(display);
        }
        return display;
    }
}

let keys = document.querySelectorAll(".key")
keys.forEach(key => {
    key.addEventListener("click", () => {
        // check zero and decimal handle cases
        if (key.value == "0") {
            display = allowZero(display);
        } else if (key.value == ".") {
            display = allowDecimal(display);
        } else if (display == "0") {
            // replace placeholder 0 with first number
            display = key.value;
            updateDisplay(display);
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
    operatorCall1 = "";
    operatorCall2 = "";
    updateDisplay(display);
})

function calculation(operator) {
    // save first operator and number
    if (operatorCall1 == "") {
        // if number1 already exists start nested calculations
        if (number1 != 0) {
            // consider first operator after initial calculation
            if (number2 == 0) {
                operatorCall1 = operator;
                display = "0";
                updateDisplay(display);
            } else {
                number1 = operate(number1, number2, operatorCall2);
                display = "0";
                updateDisplay(number1);
            }
        // update number1
        } else if (display != "0" && operator != "=") {
            number1 = parseFloat(display);
            operatorCall1 = operator;
            display = "0";
            updateDisplay(display)
        } else {
            return;
        }
    // allow for operator override
    } else if (display == "0") {
        if (operator != "=") {
            operatorCall1 = operator;
        }    
    // operate on numbers
    } else {
        operatorCall2 = operator;
        number2 = parseFloat(display);
        number1 = operate(number1, number2, operatorCall1);
        number2 = 0;
        // handle equal sign and reset both operators
        if (operatorCall2 == "=") {
            operatorCall1 = "";
            operatorCall2 = "";
        } else {
            operatorCall1 = operatorCall2;
            operatorCall2 = "";
        }
        display = "0";
        updateDisplay(number1);
        nested = true;
    }
}

let operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        calculation(operator.value);        
    })
}) 
