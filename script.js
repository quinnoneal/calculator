
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
            return true;
        case '-':
            return true;
        case '*':
            return true;
        case '/':
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
            if(operator === undefined) {
                // add space before and after operator for better look and to split elements when = is pressed.
                operator = buttonPressed;
                display.textContent += ' ';
                updateDisplay(buttonPressed);
                display.textContent += ' ';
            // if operator exists and there is second operand, operate with current elements
            } else if(display.textContent.charAt(display.textContent.length - 1) !== ' ') {
                let splitEquation = display.textContent.split(' ');
                operator = splitEquation[1];
                a = splitEquation[0];
                b = splitEquation[2];    
                display.textContent = operate(operator, a, b);
                display.textContent += ' ';
                updateDisplay(buttonPressed);
                display.textContent += ' ';    
            } else {
                console.log(operator)
                console.log(display.textContent)
                display.textContent = display.textContent.replace(operator, buttonPressed);
                operator = buttonPressed;
            }
        } else if(buttonPressed === '=') {
            // get second operand
            // reset operator variable
            let splitEquation = display.textContent.split(' ');
            operator = splitEquation[1];
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

