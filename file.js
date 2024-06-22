// Global variables
let firstStoredNumber;
let secondStoredNumber;
let operator;
let result;
let finalSolution;

// Functions
function operate() {
    if (operator == '+') {
        addition(firstStoredNumber, secondStoredNumber)
    }
    else if (operator == "-") {
        subtraction(firstStoredNumber, secondStoredNumber)
    }
    else if (operator == "*") {
        multiplication(firstStoredNumber, secondStoredNumber)
    }
    else if (operator == "/") {
        division(firstStoredNumber, secondStoredNumber)
    }
}

function addition(firstStoredNumber, secondStoredNumber) {
    result = firstStoredNumber + secondStoredNumber;
    display.textContent = result;
}
function additionOperatorPressed() {
    let checkForInput = display.textContent
    if (firstStoredNumber == undefined && finalSolution == undefined && checkForInput != "") {
        firstStoredNumber = parseFloat(display.textContent);
        operator = "+"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " +"
        }
        else {
            displayMath.textContent = firstStoredNumber + " +";
        }
    }
    else if (firstStoredNumber == undefined && (finalSolution != undefined && finalSolution != "N/A: Press Clear or a Number to Restart")) {
        firstStoredNumber = finalSolution;
        finalSolution = undefined;
        operator = "+"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " +"
        }
        else {
            displayMath.textContent = firstStoredNumber + " +";
        }
    }
    else if (checkForInput != "") {
        secondStoredNumber = parseFloat(display.textContent);
        operate();
        firstStoredNumber = result;
        operator = "+"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " +"
        }
        else {
            displayMath.textContent = firstStoredNumber + " +";
        }
    }
}

function subtraction(firstStoredNumber, secondStoredNumber) {
    result = firstStoredNumber - secondStoredNumber;
    display.textContent = result;
}
function subtractionOperatorPressed() {
    let checkForInput = display.textContent
    if (firstStoredNumber == undefined && finalSolution == undefined && checkForInput != "") {
        firstStoredNumber = parseFloat(display.textContent);
        operator = "-"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " -"
        }
        else {
            displayMath.textContent = firstStoredNumber + " -";
        }
    }
    else if (firstStoredNumber == undefined && (finalSolution != undefined && finalSolution != "N/A: Press Clear or a Number to Restart")) {
        firstStoredNumber = finalSolution;
        finalSolution = undefined;
        operator = "-"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " -"
        }
        else {
            displayMath.textContent = firstStoredNumber + " -";
        }
    }
    else if (checkForInput != "") {
        secondStoredNumber = parseFloat(display.textContent);
        operate();
        firstStoredNumber = result;
        operator = "-"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " -"
        }
        else {
            displayMath.textContent = firstStoredNumber + " -";
        }
    }
}

function multiplication(firstStoredNumber, secondStoredNumber) {
    result = firstStoredNumber * secondStoredNumber;
    display.textContent = result;
}
function multiplicationOperatorPressed() {
    let checkForInput = display.textContent
    if (firstStoredNumber == undefined && finalSolution == undefined && checkForInput != "") {
        firstStoredNumber = parseFloat(display.textContent);
        operator = "*"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " x"
        }
        else {
            displayMath.textContent = firstStoredNumber + " x";
        }
    }
    else if (firstStoredNumber == undefined && (finalSolution != undefined && finalSolution != "N/A: Press Clear or a Number to Restart")) {
        firstStoredNumber = finalSolution;
        finalSolution = undefined;
        operator = "*"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " x"
        }
        else {
            displayMath.textContent = firstStoredNumber + " x";
        }
    }
    else if (checkForInput != "") {
        secondStoredNumber = parseFloat(display.textContent);
        operate();
        firstStoredNumber = result;
        operator = "*"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " x"
        }
        else {
            displayMath.textContent = firstStoredNumber + " x";
        }
    }
}

function division(firstStoredNumber, secondStoredNumber) {
    result = firstStoredNumber / secondStoredNumber;
    // NaN sometimes causes errors & neeed to reverse the logic
    // == gives error for 0/0
    // != gives error for a number / decimal
    // isNaN solves it
    if (result == "Infinity" || result == "-Infinity" || isNaN(result) == true) {
        display.textContent = ""
        displaySolution.setAttribute("style", "font-size: 25px")
        displaySolution.textContent = "N/A: Press Clear or a Number to Restart"
        result = "N/A: Press Clear or a Number to Restart"
    }
    else {
        display.textContent = result;        
    }
    
}
function divisionOperatorPressed() {
    let checkForInput = display.textContent
    if (firstStoredNumber == undefined && finalSolution == undefined && checkForInput != "") {
        firstStoredNumber = parseFloat(display.textContent);
        operator = "/"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " /"
        }
        else {
            displayMath.textContent = firstStoredNumber + " /";
        }
    }
    else if (firstStoredNumber == undefined && (finalSolution != undefined && finalSolution != "N/A: Press Clear or a Number to Restart")) {
        firstStoredNumber = finalSolution;
        finalSolution = undefined;
        operator = "/"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " /"
        }
        else {
            displayMath.textContent = firstStoredNumber + " /";
        }
    }
    else if (checkForInput != "") {
        secondStoredNumber = parseFloat(display.textContent);
        operate();
        firstStoredNumber = result;
        operator = "/"
        display.textContent = "";
        if (firstStoredNumber.toString().length > 12){
            displayMath.textContent = firstStoredNumber.toExponential(3) + " /"
        }
        else {
            displayMath.textContent = firstStoredNumber + " /";
        }
    }
}

function equalsPressed() {
    let checkForInput = display.textContent
    displaySolution.setAttribute("style", "font-size: 40px")
    if (firstStoredNumber != undefined && checkForInput != "") {
        secondStoredNumber = parseFloat(display.textContent);
        operate();
        console.log("answer", result)
        if (result.toString().length > 12 && typeof(result) == "number") {
            displaySolution.textContent = result.toExponential(3)
        }
        else {
            displaySolution.textContent = result;
        }
        finalSolution = result
        if (firstStoredNumber.toString().length > 12 && secondStoredNumber.toString().length > 12) {
            if (operator == "*") {
                displayMath.textContent = firstStoredNumber.toExponential(3) + " " + "x" + " " + secondStoredNumber.toExponential(3) + " = ";
            }
            else {
                displayMath.textContent = firstStoredNumber.toExponential(3) + " " + operator + " " + secondStoredNumber.toExponential(3) + " = ";
            }
        }
        else if (firstStoredNumber.toString().length > 12) {
            if (operator == "*") {
                displayMath.textContent = firstStoredNumber.toExponential(3) + " " + "x" + " " + secondStoredNumber + " = ";
            }
            else {
                displayMath.textContent = firstStoredNumber.toExponential(3) + " " + operator + " " + secondStoredNumber + " = ";
            }
        }
        else if (secondStoredNumber.toString().length > 12) {
            if (operator == "*") {
                displayMath.textContent = firstStoredNumber + " " + "x" + " " + secondStoredNumber.toExponential(3) + " = ";
            }
            else {
                displayMath.textContent = firstStoredNumber + " " + operator + " " + secondStoredNumber.toExponential(3) + " = ";
            }
        }
        else {
            if (operator == "*") {
                displayMath.textContent = firstStoredNumber + " " + "x" + " " + secondStoredNumber + " = ";
            }
            else {
                displayMath.textContent = firstStoredNumber + " " + operator + " " + secondStoredNumber + " = ";
            }
        }
        display.textContent = "";
        firstStoredNumber = undefined;
        secondStoredNumber = undefined;
    }
}

function clearPressed() {
    firstStoredNumber = undefined;
    secondStoredNumber = undefined;
    displayMath.textContent = "";
    displaySolution.textContent = "";
    display.textContent = ""
}

function backSpacePressed() {
    displayValue = display.textContent;
    displayValue = displayValue.slice(0, -1)
    display.textContent = displayValue
}

function decimalPressed() {
    if (finalSolution == undefined) {
        displayValue = display.textContent
        let decimalCheck = /\./g
        let checkforDecimal = decimalCheck.test(displayValue)
        if (checkforDecimal == false) {
            display.textContent += ".";
        }
    }
}

function negativePositivePressed() {
    let negativeCheck = /\-/g
    if (display.textContent != "" && negativeCheck.test(display.textContent) == false) {
        display.textContent = "-" + display.textContent
    }
    else {
        display.textContent = display.textContent.slice(1)
    }
}



//DOM Elements
// Display
// const calculator = document.querySelector("#calculator");
// const displayUnit = document.createElement('div');
// displayUnit.setAttribute("id", "displayUnit")
// calculator.appendChild(displayUnit)

// const displayMath = document.createElement('p')
// displayMath.setAttribute("id", "displayMath")
// displayUnit.appendChild(displayMath);

// const display = document.createElement('p');
// display.setAttribute("id", "display");
// displayUnit.appendChild(display);

// const displaySolution = document.createElement('p');
// displaySolution.setAttribute("id", "displaySolution");
// displayUnit.appendChild(displaySolution);

// const pad = document.createElement('div');
// pad.setAttribute("id", "pad")
// calculator.appendChild(pad)
// Number buttons
// Loop to create the numbers on the calculator
// for (let i = 0; i < 10; i++) {
//     const numbers = document.createElement('button')
//     numbers.textContent = i;
//     if (i == 0) {
//         numbers.setAttribute("id", "zero")
//         numbers.classList.add("numbers");
//         pad.appendChild(numbers)
//     }
//     else {
//         numbers.setAttribute("id", i + "");
//         numbers.classList.add("numbers");
//         pad.appendChild(numbers)
//     }
// }
// // Operators
// const plus = document.createElement('button')
// plus.textContent = '+';
// plus.setAttribute("id", "plus");
// plus.classList.add("operators");
// pad.appendChild(plus);
// const minus = document.createElement('button')
// minus.textContent = '-';
// minus.setAttribute("id", "minus");
// minus.classList.add("operators");
// pad.appendChild(minus);
// const multiply = document.createElement('button')
// multiply.textContent = '*';
// multiply.setAttribute("id", "multiply");
// multiply.classList.add("operators");
// pad.appendChild(multiply);
// const divide = document.createElement('button')
// divide.textContent = '/';
// divide.setAttribute("id", "divide");
// divide.classList.add("operators");
// pad.appendChild(divide);
// const equal = document.createElement('button')
// equal.textContent = '=';
// equal.setAttribute("id", "equal")
// equal.classList.add("operators");
// pad.appendChild(equal)
// const clear = document.createElement('button')
// clear.textContent = 'C'
// clear.setAttribute("id", "clear")
// clear.classList.add("operators");
// pad.appendChild(clear);
// const backSpace = document.createElement('button')
// backSpace.textContent = '<-'
// backSpace.setAttribute("id", "backspace")
// backSpace.classList.add("operators");
// pad.appendChild(backSpace)
// const decimal = document.createElement('button')
// decimal.textContent = '.'
// decimal.setAttribute("id", "decimal")
// decimal.classList.add("operators");
// pad.appendChild(decimal);
// const negativePosive = document.createElement('button')
// negativePosive.textContent = "+/-"
// negativePosive.setAttribute("id", "negativePositive")
// negativePosive.classList.add("operators")
// pad.appendChild(negativePosive)

//EventListeners for keyboard support
addEventListener("keypress", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        if (displaySolution != undefined) {
            displaySolution.textContent = "";
            finalSolution = undefined;
        }
        if (display.textContent.length < 16) {
            display.textContent += event.key
        }
    }
})
addEventListener("keypress", function(event) {
    if (event.key == "+") {
        additionOperatorPressed()
    }
})
addEventListener("keypress", function(event) {
    if (event.key == "-") {
        subtractionOperatorPressed()
    }
})
addEventListener("keypress", function(event) {
    if (event.key == "*") {
        multiplicationOperatorPressed()
    }
})
addEventListener("keypress", function(event) {
    if (event.key == "/") {
        divisionOperatorPressed()
    }
})
addEventListener("keypress", function(event) {
    if (event.key == "=" || event.key == "Enter") {
        equalsPressed()
    }
})
addEventListener("keypress", function(event) {
    if (event.key == "Backspace" || event.key == "Delete") {
        backSpacePressed()
    }
})
addEventListener("keypress", function(event) {
    if (event.key == "c") {
        clearPressed()
    }
})
addEventListener("keypress", function(event) {
    if (event.key == ".") {
        decimalPressed()
    }
})

//Event listeners for buttons
const appendNumbersOnScreen = document.querySelectorAll(".numbers");
appendNumbersOnScreen.forEach((button) => {
    button.addEventListener("click", () => {
        if (displaySolution != undefined) {
            displaySolution.textContent = "";
            finalSolution = undefined;
        }
        if (display.textContent.length < 16) {
            display.textContent += button.id
        }
    });
});
const appendZeroOnScreen = document.querySelectorAll(".zero")
appendZeroOnScreen.forEach((button) => {
    button.addEventListener("click", () => {
        if (displaySolution != undefined) {
            displaySolution.textContent = "";
            finalSolution = undefined;
        }
        if (display.textContent.length < 16) {
            display.textContent += button.id
        }
    });
})
const add = document.querySelector("#plus");
add.addEventListener("click", additionOperatorPressed)
const takeAway = document.querySelector("#minus");
takeAway.addEventListener("click", subtractionOperatorPressed)
const times = document.querySelector("#multiply");
times.addEventListener("click", multiplicationOperatorPressed)
const split = document.querySelector("#divide");
split.addEventListener("click", divisionOperatorPressed)
const math = document.querySelector("#equal");
math.addEventListener("click", equalsPressed)
const displayCleared = document.querySelector("#clear")
displayCleared.addEventListener("click", clearPressed)
const del = document.querySelector("#backspace")
del.addEventListener("click", backSpacePressed)
const dot = document.querySelector('#decimal')
dot.addEventListener("click", decimalPressed)
const negPos = document.querySelector("#negativePositive")
negPos.addEventListener("click", negativePositivePressed)