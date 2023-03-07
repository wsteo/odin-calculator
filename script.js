function add(a, b) {
    return a + b;
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
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if (operator == "*") {
        return multiply(a, b);
    }
    else if (operator == "/") {
        return divide(a, b);
    }
}

let displayValue = "";
let displayOperator = "";

let tempNumberContainer = ""

function updateCalculatorOutput() {
    const calculatorOutputNum = document.querySelector('#result');
    calculatorOutputNum.textContent = displayValue;
}

function updateCalculatorOperator() {
    const calculatorOperator = document.querySelector('#operator');
    calculatorOperator.textContent = displayOperator;
}

const calculatorButtons = document.querySelectorAll('.calculator-btn');

calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', (e) => {
        console.log(calculatorButton.value);
        if (calculatorButton.value == 'clear') {
            displayValue = "";
            displayOperator = "";
        }
        else if (calculatorButton.value == '+' || calculatorButton.value == '-'
            || calculatorButton.value == '*' || calculatorButton.value == '/') {
            displayOperator = calculatorButton.value;
            tempNumberContainer = displayValue;
            displayValue = "";
        }
        else if (calculatorButton.value == '=') {
            displayValue = operate(displayOperator,Number(tempNumberContainer),Number(displayValue));
            displayOperator = "";
        }
        else {
            displayValue += calculatorButton.value;
        }
        updateCalculatorOperator();
        updateCalculatorOutput();
    });
});