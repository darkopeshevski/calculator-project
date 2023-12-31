const screen = document.querySelector(".screen");
const allNumberButtons = document.querySelectorAll(".number-button");
const allOperatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");
const backspaceButton = document.querySelector(".back-button");
const upperScreen = document.querySelector(".temporary-screen");

// Some global variables.
upperScreen.textContent = "";
screen.textContent = "0";
let screenContent = "";
let firstNumber = 0;
let operator = "";
let flag = false;
let equalsFlag = false;

// The operate function.
function operate() {
  if (operator === "+") {
    firstNumber += parseInt(screenContent);
    screen.textContent = firstNumber;
    console.log(`firstNumber : ${firstNumber}`);
  }

  else if (operator === "-") {
    firstNumber -= parseInt(screenContent);
    screen.textContent = firstNumber;
    console.log(`firstNumber : ${firstNumber}`);
  }

  else if (operator === "/") {
    if (screenContent === "0") {
      firstNumber = 0;
      screen.textContent = firstNumber;
    }
    else {
      firstNumber /= parseInt(screenContent);
      screen.textContent = firstNumber;
      console.log(`firstNumber : ${firstNumber}`);
    }
  }

  else if (operator === "x") {
    firstNumber *= parseInt(screenContent);
    screen.textContent = firstNumber;
    console.log(`firstNumber : ${firstNumber}`);
  }

  else {
    firstNumber = parseInt(screenContent);
    screen.textContent = firstNumber;
    console.log(`firstNumber : ${firstNumber}`);
  }
};

// Inserting numbers on the screen by typing on the keyboard. Also deleting content.
window.addEventListener('keydown', function(event) {
  const button = this.document.querySelector(`button[code="${event.code}"]`);
  console.log(event.code);

  if (button) {
    if (event.code === "KeyC") {
      deleteAndRestartAllContent();
    }
    else if (event.code === "Backspace") {
      deletingLastNumber();
    }
     
    else {
      if (screen.textContent.length <= 31) {
        if (equalsFlag === true) {
          upperScreen.textContent = "";
          screen.textContent = "";
          equalsFlag = false;
        }
        
        if (screen.textContent === "0") {
          screen.textContent = "";
        }
    
        if (flag === true) {
          screen.textContent = "";
          flag = false;
        }
      
        screen.textContent += button.textContent;
        screenContent = screen.textContent;
        console.log(`screenContent = ${screenContent}`);
      }
      else {
      }
    }
  }
  else {
    if (event.shiftKey) {
      if (event.code === "Equal") {
        if (equalsFlag === true) {
          upperScreen.textContent = "";
          equalsFlag = false;
        }
        operate();
        operator = "+";
        flag = true;
        console.log(`Screen content : ${screenContent}`);
        upperScreen.textContent += `${screenContent} + `;
      }
    }
    else if (event.code === "Minus") {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        equalsFlag = false;
      }
      operate();
      operator = "-";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      upperScreen.textContent += `${screenContent} - `;
    }
    else if (event.code === "Slash") {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        equalsFlag = false;
      }
      operate();
      operator = "/";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      upperScreen.textContent += `${screenContent} / `;
    } 
    else if (event.code === "KeyX") {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        equalsFlag = false;
      }
      operate();
      operator = "x";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      upperScreen.textContent += `${screenContent} x `;
    }
    
    else if (event.code === "Equal") {
      if (operator === "+") {
        console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
        const result = firstNumber + parseInt(screenContent);
        screen.textContent = result;
        upperScreen.textContent += `${screenContent} = ${result}`;
        equalsFlag = true;
        operator = "";
        screenContent = result;
        console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
      }
    
      else if (operator === "-") {
        console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
        const result = firstNumber - parseInt(screenContent);
        screen.textContent = result;
        upperScreen.textContent += `${screenContent} = ${result}`;
        equalsFlag = true;
        operator = "";
        screenContent = result;
        console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
      }
    
      else if (operator === "x") {
        console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
        const result = firstNumber * parseInt(screenContent);
        screen.textContent = result;
        upperScreen.textContent += `${screenContent} = ${result}`;
        equalsFlag = true;
        operator = "";
        screenContent = result;
        console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
      }
    
      else if (operator === "/") {
        console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
        let result = firstNumber / parseInt(screenContent);
        if (result === Infinity) {
          result = 0;
        }
        screen.textContent = result;
        upperScreen.textContent += `${screenContent} = ${result}`;
        equalsFlag = true;
        operator = "";
        screenContent = result;
        console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
      }
    }

  }

});


// Inserting numbers when clicking on the screen numbers.
allNumberButtons.forEach(button => {
  button.addEventListener('click', function() {
    console.log(screen.textContent.length);

    if (screen.textContent.length <= 31) {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        screen.textContent = "";
        equalsFlag = false;
      }
      
      if (screen.textContent === "0") {
        screen.textContent = "";
      }
  
      if (flag === true) {
        screen.textContent = "";
        flag = false;
      }
    
      screen.textContent += button.textContent;
      screenContent = screen.textContent;
      console.log(`screenContent = ${screenContent}`);
    }
  })
});


// The operator buttons and their functionality.
allOperatorButtons.forEach(button => {
  button.addEventListener('click', function() {

    if (button.textContent === "+") {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        equalsFlag = false;
      }
      operate();
      operator = "+";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      upperScreen.textContent += `${screenContent} + `;
    }

    else if (button.textContent === "-") {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        equalsFlag = false;
      }
      operate();
      operator = "-";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      console.log(flag);
      upperScreen.textContent += `${screenContent} - `;
    }

    else if (button.textContent === "/") {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        equalsFlag = false;
      }
      operate();
      operator = "/";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      console.log(flag);
      upperScreen.textContent += `${screenContent} / `;
    }

    else if (button.textContent === "x") {
      if (equalsFlag === true) {
        upperScreen.textContent = "";
        equalsFlag = false;
      }
      operate();
      operator = "x";
      flag = true;
      console.log(`Screen content : ${screenContent}`);
      console.log(flag);
      upperScreen.textContent += `${screenContent} x `;
    }

  })
});

// The equals button and its functionality.
equalsButton.addEventListener('click', function() {
  if (operator === "+") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    const result = firstNumber + parseInt(screenContent);
    screen.textContent = result;
    upperScreen.textContent += `${screenContent} = ${result}`;
    equalsFlag = true;
    operator = "";
    screenContent = result;
    console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
  }

  else if (operator === "-") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    const result = firstNumber - parseInt(screenContent);
    screen.textContent = result;
    upperScreen.textContent += `${screenContent} = ${result}`;
    equalsFlag = true;
    operator = "";
    screenContent = result;
    console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
  }

  else if (operator === "x") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    const result = firstNumber * parseInt(screenContent);
    screen.textContent = result;
    upperScreen.textContent += `${screenContent} = ${result}`;
    equalsFlag = true;
    operator = "";
    screenContent = result;
    console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
  }

  else if (operator === "/") {
    console.log(`firstNUmber = ${firstNumber}, screenContent = ${screenContent}`);
    let result = firstNumber / parseInt(screenContent);
    if (result === Infinity) {
      result = 0;
    }
    screen.textContent = result;
    upperScreen.textContent += `${screenContent} = ${result}`;
    equalsFlag = true;
    operator = "";
    screenContent = result;
    console.log(`firstNumber = ${firstNumber}, screen = ${screen.textContent}, screenContent = ${screenContent}`);
  }
})

// Delete button to delete everything from the 2 screens and reset all the variables.
deleteButton.addEventListener('click', function() {
  deleteAndRestartAllContent();
})

// Slicing off the last number on the 2 screens.
backspaceButton.addEventListener('click', function() {
  deletingLastNumber();
});

// Function to delete everything from the 2 screens and reset all the variables.
function deleteAndRestartAllContent() {
  upperScreen.textContent = "";
  screen.textContent = "0";
  firstNumber = 0;
  operator = "";
  flag = false;
  screenContent = "";
  console.log(`screenContent = ${screenContent}`);
}

function deletingLastNumber() {
  screen.textContent = screen.textContent.slice(0, -1);
  
  if (!screen.textContent) {
    screen.textContent = "0";
  }
  screenContent = screen.textContent;
  console.log(screenContent);
}


