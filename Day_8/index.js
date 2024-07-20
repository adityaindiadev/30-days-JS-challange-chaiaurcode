// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "John";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};
const { title, author } = book;
console.log(title, author);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name2 = "Alice";
const age2 = 25;
const person = {
  name2,
  age2,
  greet() {
    console.log(`Hello, my name is ${this.name2} and I am ${this.age2} years old.`);
  }
};
console.log(person);
person.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "dynamicProperty";
const computedObject = {
  [propName]: "This is a dynamic property"
};
console.log(computedObject);

// Feature Requests:

// 1. Template Literals Script
const personName = "Emily";
const personAge = 22;
const greeting = `Hello, my name is ${personName} and I am ${personAge} years old.`;
console.log(greeting);

const multiLineGreeting = `This is a greeting
that spans multiple
lines.`;
console.log(multiLineGreeting);

// 2. Destructuring Script
const colors = ["red", "green", "blue"];
const [color1, color2] = colors;
console.log(color1, color2);

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};
const { make, model } = car;
console.log(make, model);

// 3. Spread and Rest Operators Script
const nums = [10, 20, 30];
const extendedNums = [...nums, 40, 50, 60];
console.log(extendedNums);

function calculateSum(...values) {
  return values.reduce((acc, value) => acc + value, 0);
}
console.log(calculateSum(5, 10, 15, 20));

// 4. Default Parameters Script
function divide(a, b = 1) {
  return a / b;
}
console.log(divide(10, 2)); // 5
console.log(divide(10));    // 10

// 5. Enhanced Object Literals Script
const hobby = "coding";
const language = "JavaScript";
const coder = {
  hobby,
  language,
  introduce() {
    console.log(`I love ${this.hobby} in ${this.language}.`);
  }
};

const dynamicProp = "skillLevel";
const coderWithComputedProp = {
  [dynamicProp]: "Intermediate"
};

console.log(coder);
coder.introduce();
console.log(coderWithComputedProp);
