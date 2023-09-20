

const screen = document.querySelector(".screen");
const allNumberButtons = document.querySelectorAll(".number-button");
const allOperatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayResult = "";

// Putting content on the screen.
allNumberButtons.forEach(button => {

  button.addEventListener('mousedown', function() {
    screen.textContent += button.textContent;
    displayResult = screen.textContent;
    console.log(displayResult);
  })
});

// Deleting the screen context and restarting everything.
deleteButton.addEventListener('mousedown', function() {
  screen.textContent = "";
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  displayResult = "";
});


// Performing the operation between the two numbers based on what the operator variable is.
equalsButton.addEventListener('mousedown', function() {

  secondNumber = parseInt(displayResult);

  let result = operate(firstNumber, operator, secondNumber);
  screen.textContent = result;
});


allOperatorButtons.forEach(button => {
  button.addEventListener('mousedown', function() {

    if (button.textContent === "-") {
      firstNumber = parseInt(displayResult);
      operator = "-";
      screen.textContent = "";
    }

    else if (button.textContent === "+") {
      firstNumber = parseInt(displayResult);
      operator = "+";
      screen.textContent = "";
    }

    else if (button.textContent === "/") {
      firstNumber = parseInt(displayResult);
      operator = "/";
      screen.textContent = "";
    }

    else if (button.textContent === "x") {
      firstNumber = parseInt(displayResult);
      operator = "x";
      screen.textContent = "";
    }

  })
});


// Function that operates.
function operate(num1, operator, num2) {
  if (operator === "-") {
    const result = subtract(num1, num2);
    return result;
  }

  else if (operator === "+") {
    const result = add(num1, num2);
    return result;
  }

  else if (operator === "x") {
    const result = multiply(num1, num2);
    return result;
  }
  
  else if (operator === "/") {
    const result = divide(num1, num2);
    return result;
  }
}


// Functions that add, subtract, etc... between two numbers.
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

