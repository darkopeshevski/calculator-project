const screen = document.querySelector(".screen");
const allNumberButtons = document.querySelectorAll(".number-button");
const allOperatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");
const backspaceButton = document.querySelector(".back-button");

screen.textContent = "0";
let screenContent = "";
let firstNumber = 0;
let operator = "";
let flag = false;

function operate() {
if (operator === "+") {
  firstNumber += parseInt(screenContent);
  console.log(`firstNumber : ${firstNumber}`);
}

else if (operator === "-") {
  firstNumber -= parseInt(screenContent);
  console.log(`firstNumber : ${firstNumber}`);
}

else if (operator === "/") {
  firstNumber /= parseInt(screenContent);
  console.log(`firstNumber : ${firstNumber}`);
}

else if (operator === "x") {
  firstNumber *= parseInt(screenContent);
  console.log(`firstNumber : ${firstNumber}`);
}

else {
  firstNumber = parseInt(screenContent);
  console.log(`firstNumber : ${firstNumber}`);
}
}

// Inserting numbers on the screen.
allNumberButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (screen.textContent === "0") {
      screen.textContent = "";
    }

    if (flag === true) {
      console.log("kur");
      screen.textContent = "";
      flag = false;
    }
    
    screen.textContent += button.textContent;
    screenContent = screen.textContent;
    console.log(`screenContent = ${screenContent}`);
  })
})

allOperatorButtons.forEach(button => {
  button.addEventListener('click', function() {

    if (button.textContent === "+") {
      operate();
      operator = "+";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      console.log(flag);
    }

    else if (button.textContent === "-") {
      operate();
      operator = "-";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      console.log(flag);
    }

    else if (button.textContent === "/") {
      operate();
      operator = "/";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      console.log(flag);
    }

    else if (button.textContent === "x") {
      operate();
      operator = "x";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      console.log(flag);
    }

  })
})

equalsButton.addEventListener('click', function() {
  if (operator === "+") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    let result = firstNumber + parseInt(screenContent);
    screen.textContent = result;
    console.log(`result = ${result}, screen = ${screen.textContent}`);
  }

  else if (operator === "-") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    let result = firstNumber - parseInt(screenContent);
    screen.textContent = result;
    console.log(`result = ${result}, screen = ${screen.textContent}`);
  }

  else if (operator === "x") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    let result = firstNumber * parseInt(screenContent);
    screen.textContent = result;
    console.log(`result = ${result}, screen = ${screen.textContent}`);
  }

  else if (operator === "/") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    let result = firstNumber / parseInt(screenContent);
    screen.textContent = result;
    console.log(`result = ${result}, screen = ${screen.textContent}`);
  }

})

deleteButton.addEventListener('click', function() {
  screen.textContent = "0";
  firstNumber = 0;
  operator = "";
  flag = false;
})

// Slicing off the last number on the screen.
backspaceButton.addEventListener('click', function() {
  screen.textContent = screen.textContent.slice(0, -1);
  
  screenContent = screen.textContent;
  console.log(screenContent);

})


