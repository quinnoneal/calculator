
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function updateDisplay(value) {
    display.textContent += value;
}

function isOperator(value) {
    switch(value) {
        case '+':
            operator = '+';
            return true;
        case '-':
            operator = '-';
            return true;
        case '*':
            operator = '*';
            return true;
        case '/':
            operator = '/';
            return true;
        default:
            return false;
    }
}

function clearDisplay() {
    display.textContent = '';
    a = undefined;
    b = undefined;
    operator = undefined;
}

let a;
let operator;
let b;

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonPressed = button.textContent;
        // check if user clicked operator, if so, if operator variable != null, operate, then show sum plus operator pressed.
        if(isOperator(buttonPressed)) {
            // check if operator already exists
            if(b == undefined) {
            // add space before and after operator for better look and to split elements when = is pressed.
            display.textContent += ' ';
            updateDisplay(buttonPressed);
            display.textContent += ' ';
            // if operator exists, operate with current elements
            } else {
                display.textContent = operate(operator, a, b);
                display.textContent += ' ';
                updateDisplay(buttonPressed);
                display.textContent += ' ';    
            }
        } else if(buttonPressed === '=') {
            // get second operand
            // reset operator variable
            let splitEquation = display.textContent.split(' ');
            a = splitEquation[0];
            b = splitEquation[2];
            display.textContent = operate(operator, a, b);
            a = undefined;
            b = undefined;
            operator = undefined;
        } else if(buttonPressed === 'Clear') {
            clearDisplay();
        } else {
            updateDisplay(buttonPressed);
        }
    });
})

