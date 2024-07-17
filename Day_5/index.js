// Activity 1: Function Declaration

// Task 1: Function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

// Task 2: Function to calculate the square of a number and return the result.
function calculateSquare(number) {
    return number * number;
}

// Activity 2: Function Expression

// Task 3: Function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(a, b) {
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
}

// Task 4: Function expression to concatenate two strings and return the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
}

// Activity 3: Arrow Functions

// Task 5: Arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;

// Task 6: Arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);

// Activity 4: Function Parameters and Default Values

// Task 7: Function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}

// Task 8: Function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Activity 5: Higher-Order Functions

// Task 9: Higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

// Task 10: Higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

// Feature Requests

// 1. Even or Odd Function Script
function evenOrOddFunctionScript() {
    let number = 4; // Example number
    checkEvenOrOdd(number);
}

// 2. Square Calculation Function Script
function squareCalculationFunctionScript() {
    let number = 5; // Example number
    let square = calculateSquare(number);
    console.log(`The square of ${number} is ${square}`);
}

// 3. Concatenation Function Script
function concatenationFunctionScript() {
    let str1 = "Hello, ";
    let str2 = "world!";
    let result = concatenateStrings(str1, str2);
    console.log(result);
}

// 4. Sum Calculation Arrow Function Script
function sumCalculationArrowFunctionScript() {
    let a = 10;
    let b = 20;
    let result = sum(a, b);
    console.log(`The sum of ${a} and ${b} is ${result}`);
}

// 5. Higher-Order Function Script
function higherOrderFunctionScript() {
    let times = 3;
    let func = () => console.log("Function called!");
    repeatFunction(func, times);
}

// Example calls to the feature request functions
evenOrOddFunctionScript();
squareCalculationFunctionScript();
concatenationFunctionScript();
sumCalculationArrowFunctionScript();
higherOrderFunctionScript();
