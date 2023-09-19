

const screen = document.querySelector(".screen");
const allNumberButtons = document.querySelectorAll(".number-button");
const allOperatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

deleteButton.addEventListener('mousedown', function() {
  screen.textContent = "";
  firstNumber = 0;
  secondNumber = 0;
})

equalsButton.addEventListener('mousedown', function() {
  secondNumber = parseInt(screen.textContent);
  let kur = subtract(firstNumber, secondNumber);
  // console.log(kur);
  screen.textContent = kur;
})

allNumberButtons.forEach(button => {

  button.addEventListener('mousedown', function() {
    screen.textContent += button.textContent;
    console.log(screen.textContent);
  })
  
});

allOperatorButtons.forEach(button => {
  button.addEventListener('mousedown', function() {

    if (!firstNumber & button.textContent === "-") {
      let firstContext = screen.textContent;
      console.log(`first context - ${firstContext}`);
      
      let intoNum = parseInt(firstContext);
      firstNumber = intoNum;
      console.log(`firstNumber - ${firstNumber}`);
      operator = "-";
      screen.textContent = "";
    }

    else if (!firstNumber & button.textContent === "+") {
      let firstContext = screen.textContent;
      console.log(`first context - ${firstContext}`);
      
      let intoNum = parseInt(firstContext);
      firstNumber = intoNum;
      console.log(`firstNumber - ${firstNumber}`);

      screen.textContent = "";
    }

  })
})


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

