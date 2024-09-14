document.addEventListener('DOMContentLoaded', function() {
    let displayValue = '0'
    function updateDisplay() {
        const display = document.querySelector("#display");
        display.innerText = displayValue;
        if (displayValue.length > 9) {
            display.innerText = displayValue.substring(0,9);
        }
    }

    updateDisplay();
});