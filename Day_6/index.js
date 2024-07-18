// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let array = [1, 2, 3, 4, 5];
console.log('Array:', array);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log('First element:', array[0]);
console.log('Last element:', array[array.length - 1]);

// Activity 2: Array Methods (Basic)
// Task 3: Use the method to add a new number to the end of the array and log the updated array.
array.push(6);
console.log('After push:', array);

// Task 4: Use the method to remove the last element from the array and log the updated array.
array.pop();
console.log('After pop:', array);

// Task 5: Use the method to remove the first element from the array and log the updated array.
array.shift();
console.log('After shift:', array);

// Task 6: Use the method to add a new number to the beginning of the array and log the updated array.
array.unshift(0);
console.log('After unshift:', array);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the method to create a new array where each number is doubled and log the new array.
let doubledArray = array.map(num => num * 2);
console.log('Doubled Array:', doubledArray);

// Task 8: Use the method to create a new array with only even numbers and log the new array.
let evenArray = array.filter(num => num % 2 === 0);
console.log('Even Array:', evenArray);

// Task 9: Use the method to calculate the sum of all numbers in the array and log the result.
let sum = array.reduce((acc, num) => acc + num, 0);
console.log('Sum of Array:', sum);

// Activity 4: Array Iteration
// Task 10: Use a loop to iterate over the array and log each element to the console.
console.log('Using for loop:');
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Task 11: Use the method to iterate over the array and log each element to the console.
console.log('Using forEach:');
array.forEach(num => console.log(num));

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Matrix:', matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log('Element at [1][1]:', matrix[1][1]);

// Feature Request:
// 1. Array Manipulation Script
let manipulationArray = [10, 20, 30];
manipulationArray.push(40);
console.log('After push:', manipulationArray);
manipulationArray.pop();
console.log('After pop:', manipulationArray);
manipulationArray.shift();
console.log('After shift:', manipulationArray);
manipulationArray.unshift(5);
console.log('After unshift:', manipulationArray);

// 2. Array Transformation Script
let transformationArray = [1, 2, 3, 4, 5];
let transformedArray = transformationArray.map(num => num * 3);
console.log('Transformed Array:', transformedArray);
let filteredArray = transformationArray.filter(num => num % 2 !== 0);
console.log('Filtered Array:', filteredArray);
let totalSum = transformationArray.reduce((acc, num) => acc + num, 0);
console.log('Total Sum:', totalSum);

// 3. Array Iteration Script
let iterationArray = [100, 200, 300];
console.log('Using for loop:');
for (let i = 0; i < iterationArray.length; i++) {
  console.log(iterationArray[i]);
}
console.log('Using forEach:');
iterationArray.forEach(num => console.log(num));

// 4. Two-dimensional Array Script
let twoDArray = [
  [1, 2],
  [3, 4]
];
console.log('Two-dimensional Array:', twoDArray);
console.log('Element at [0][1]:', twoDArray[0][1]);
twoDArray[0].push(3);
console.log('After push:', twoDArray);
twoDArray[1].pop();
console.log('After pop:', twoDArray);
twoDArray.unshift([0, 0]);
console.log('After unshift:', twoDArray);
twoDArray.shift();
console.log('After shift:', twoDArray);
