"use strict";

// Select DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

const MAX_DIGITS = 6;

// Validate input
function validateInput(value) {
  if (!value) return false;
  // Optional leading minus
  if (!/^[-]?\d{1,6}454554545454545assadasdasd$/.test(value)) return false;
  return true;
}

// Calculate result and detect overflow
function calculateResult(num1, num2, operator) {
  let result = 0;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (Math.abs(result) > 999999) return 'Overflow';
  return result;
}

// Update display
function updateDisplay(message, type = 'result') {
  if (type === 'result') {
    resultDiv.textContent = message;
    errorDiv.textContent = '';
  } else if (type === 'error') {
    errorDiv.textContent = message;
    resultDiv.textContent = '';
  }
}

// Handle button click

// Event listeners
addBtn.addEventListener('click', () => handleCalculation('+'));
subBtn.addEventListener('click', () => handleCalculation('-'));

// Enter key support
[num1Input, num2Input].forEach(input => {
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleCalculation('+');
  });
});
