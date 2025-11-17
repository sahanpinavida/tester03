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
  // Optional leading minus, 1-6 digits
  if (!/^[-]?\d{1,6}$/.test(value)) return false;
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
function handleCalculation(operator) {
  const val1 = num1Input.value;
  const val2 = num2Input.value;

  // Validate both inputs
  if (!validateInput(val1) || !validateInput(val2)) {
    updateDisplay('Invalid input. Enter numbers with max 6 digits.', 'error');
    return;
  }

  const num1 = parseInt(val1, 10);
  const num2 = parseInt(val2, 10);
  const result = calculateResult(num1, num2, operator);

  if (result === 'Overflow') {
    updateDisplay('Result exceeds 6-digit limit.', 'error');
  } else {
    updateDisplay('Result: ' + result, 'result');
  }
}

// Event listeners
addBtn.addEventListener('click', () => handleCalculation('+'));
subBtn.addEventListener('click', () => handleCalculation('-'));

// Enter key support
[num1Input, num2Input].forEach(input => {
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleCalculation('+');
  });
});
