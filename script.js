function add(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return number1 + number2;
}

function subtract(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return number1 - number2;
}

function multiply(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return number1 * number2;
}

function divide(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return;
    }
    return number1 / number2;
}