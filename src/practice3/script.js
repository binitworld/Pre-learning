// script.js
document.addEventListener("DOMContentLoaded", function() {
    const a = prompt("Enter the value of a:");
    const b = prompt("Enter the value of b:");

    const result = calculate(parseInt(a), parseInt(b));
    displayResult(result);
});

function calculate(a, b) {
    return a + b + a * b + a / b + a - b;
}

function displayResult(result) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "The result is: " + result;
}
