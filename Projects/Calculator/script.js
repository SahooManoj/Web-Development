document.addEventListener('DOMContentLoaded', function() {
    let displayValue   = '0';
    let firstOperand   = null;
    let secondOperand  = null;
    let firstOperator  = null;
    let secondOperator = null;
    let result         = null;
    const operandBtn   = document.querySelectorAll(".operands");
    const operatorBtn  = document.querySelectorAll(".operators")

    function updateDisplay() {
        const display = document.querySelector("#display");
        display.innerText = displayValue;
    }

    updateDisplay();

    function clickButton() {
        operandBtn.forEach(button => {
            button.addEventListener('click', function() {
                inputOperand(this.textContent);
                updateDisplay();
            });
        });

        operatorBtn.forEach(button => {
            button.addEventListener('click', function() {
                inputOperator(this.textContent);
            });
        });
    }

    clickButton();

    function inputOperand(value) {
        if(firstOperator === null) {
            if(displayValue === '0' || displayValue === 0) {
                displayValue = value;
            } 
            else if(displayValue === firstOperand) {
                displayValue = value;
            } 
            else if(displayValue.length < 9){
                displayValue += value;
            }
        } 
        else {
            if(displayValue === firstOperand) {
                displayValue = value;
            } 
            else if(displayValue.length < 9){
                displayValue += value;
            }
        }
    }

    function inputOperator(sign) {
        if (firstOperator === null) {
            firstOperand = displayValue;
            firstOperator = sign;
        }
        else if(firstOperator != null && secondOperator === null) {
            secondOperand = displayValue;
            secondOperator = sign;
            result = operation(Number(firstOperand), Number(secondOperand), firstOperator);
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            updateDisplay();
        }
        else {
            secondOperand = displayValue;
            result = operation(Number(firstOperand), Number(secondOperand), secondOperator);
            secondOperator = sign;
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            updateDisplay();
        }
    }

    function operation(x, y, sign){
        if (sign === "+") {
            return x + y;
        }
        else if(sign === "-") {
            return x - y;
        }
    }

    function roundAccurately(num, places) {
        return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
    }
});

