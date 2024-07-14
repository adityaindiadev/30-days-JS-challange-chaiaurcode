// Activity 1: Arithmetic Operations

// Task 1: Add two numbers and log the result to the console
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("Sum:", sum);

// Task 2: Subtract two numbers and log the result to the console
let difference = num1 - num2;
console.log("Difference:", difference);

// Task 3: Multiply two numbers and log the result to the console
let product = num1 * num2;
console.log("Product:", product);

// Task 4: Divide two numbers and log the result to the console
let quotient = num1 / num2;
console.log("Quotient:", quotient);

// Task 5: Find the remainder when one number is divided by another and log the result to the console
let remainder = num1 % num2;
console.log("Remainder:", remainder);

// Activity 2: Assignment Operators

// Task 6: Use the operator to add a number to a variable and log the result to the console
let a = 10;
a += 5; // Equivalent to a = a + 5
console.log("a after addition:", a);

// Task 7: Use the operator to subtract a number from a variable and log the result to the console
let b = 10;
b -= 3; // Equivalent to b = b - 3
console.log("b after subtraction:", b);

// Activity 3: Comparison Operators

// Task 8: Compare two numbers using '==' and log the result to the console
let isEqual = (num1 == num2);
console.log("num1 == num2:", isEqual);

// Task 9: Compare two numbers using '!=' and log the result to the console
let isNotEqual = (num1 != num2);
console.log("num1 != num2:", isNotEqual);

// Task 10: Compare two numbers using '>' and log the result to the console
let isGreaterThan = (num1 > num2);
console.log("num1 > num2:", isGreaterThan);

// Activity 4: Logical Operators

// Task 11: Use '&&' operator to combine two conditions and log the result to the console
let andCondition = (num1 > 0 && num2 > 0);
console.log("num1 > 0 && num2 > 0:", andCondition);

// Task 12: Use '||' operator to combine two conditions and log the result to the console
let orCondition = (num1 > 0 || num2 < 0);
console.log("num1 > 0 || num2 < 0:", orCondition);

// Task 13: Use '!' operator to negate a condition and log the result to the console
let notCondition = !(num1 < 0);
console.log("!(num1 < 0):", notCondition);

// Activity 5: Ternary Operator

// Task 14: Use the ternary operator to check if a number is positive or negative and log the result to the console
let numToCheck = -5;
let checkResult = (numToCheck >= 0) ? "Positive" : "Negative";
console.log("The number is:", checkResult);

// Feature Request 1: Arithmetic Operations Script
function arithmeticOperations(num1, num2) {
  console.log("Addition:", num1 + num2);
  console.log("Subtraction:", num1 - num2);
  console.log("Multiplication:", num1 * num2);
  console.log("Division:", num1 / num2);
  console.log("Remainder:", num1 % num2);
}

// Feature Request 2: Comparison and Logical Operators Script
function compareAndLogicalOperators(num1, num2) {
  console.log("num1 == num2:", num1 == num2);
  console.log("num1 != num2:", num1 != num2);
  console.log("num1 > num2:", num1 > num2);
  console.log("num1 >= num2:", num1 >= num2);
  console.log("num1 < num2:", num1 < num2);
  console.log("num1 <= num2:", num1 <= num2);
  console.log("num1 > 0 && num2 > 0:", num1 > 0 && num2 > 0);
  console.log("num1 > 0 || num2 < 0:", num1 > 0 || num2 < 0);
  console.log("!(num1 < 0):", !(num1 < 0));
}

// Feature Request 3: Ternary Operator Script
function checkPositiveNegative(num) {
  let result = (num >= 0) ? "Positive" : "Negative";
  console.log("The number is:", result);
}

// Example usage of the feature request functions
arithmeticOperations(10, 5);
compareAndLogicalOperators(10, 5);
checkPositiveNegative(-5);
