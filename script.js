function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b === 0){
        return "error"; 
    }
    return a / b;
}

function operate(a, b, operator){
    a = parseFloat(a); 
    b = parseFloat(b);
    
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let displayValue = ''; 
const display = document.getElementById('display'); 

const buttons = document.querySelectorAll('.button'); 
let result = ''; 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; 

        
        if (value === 'C') {
            firstOperand = '';
            secondOperand = '';
            currentOperator = null;
            displayValue = '';
            result = '';
        } 

       
        else if (!isNaN(value) || value === '.') {
            if (currentOperator === null) {
                firstOperand += value; 
            } else {
                secondOperand += value; 
            }
        }

        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (firstOperand && !secondOperand) {
                currentOperator = value; 
            }
        }

        else if (value === '=') {
            if (firstOperand && secondOperand && currentOperator) {
                result = operate(firstOperand, secondOperand, currentOperator);
                displayValue = result; 
                firstOperand = result; 
                secondOperand = ''; 
                currentOperator = null; 
            }
        }

        displayValue = firstOperand + (currentOperator ? ' ' + currentOperator + ' ' : '') + secondOperand;
        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = displayValue; // Обновляем содержимое дисплея
}
