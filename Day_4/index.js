// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

// Initialize a variable num to 1 and loop until num is less than or equal to 10
for (let num = 1; num <= 10; num++) {
    // Print the current number
    console.log(num);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

// Initialize a variable num to 1 and loop until num is less than or equal to 10
for (let num = 1; num <= 10; num++) {
    // Print the multiplication of 5 with the current number
    console.log(`5 x ${num}: ` + 5 * num);
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

// Initialize variables num and sum to 1 and 0 respectively
let num = 1;
let sum = 0;

// Loop until num is less than or equal to 10
while (num <= 10) {
    // Add the current number to the sum
    sum += num;
    // Increment num by 1
    num++;
}

// Print the sum
console.log({ sum });

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

// Initialize num to 10
num = 10;

// Loop until num is greater than or equal to 1
while (num >= 1) {
    // Print the current number
    console.log(num);
    // Decrement num by 1
    num--;
}

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

// Initialize num to 0
num = 0;

// Loop until num is less than 5
do {
    // Increment num by 1
    num++;
    // Print the current number
    console.log(num);
} while (num < 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

// Initialize variables calcFactorialOf, i, and ans to 5, 1, and 1 respectively
let calcFactorialOf = 5;
let i = 1;
let ans = 1;

// Loop until i is less than or equal to calcFactorialOf
do {
    // Multiply ans by i
    ans *= i;
    // Increment i by 1
    i++;
} while (i <= calcFactorialOf);

// Print the factorial of calcFactorialOf
console.log({ calcFactorialOf }, ans);

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:

// Print a newline character
console.log("\n");

// Initialize row to 1 and loop until row is less than or equal to 4
for (let row = 1; row <= 4; row++) {
    // Initialize an empty string str
    let str = '';

    // Initialize column to 1 and loop until column is less than or equal to row
    for (let column = 1; column <= row; column++) {
        // Append "*" and a space to str
        str += "*" + " ";
    }
    // Print the pattern for the current row
    console.log(str);
}

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement.

// Initialize num to 1 and loop until num is less than or equal to 10
for (let num = 1; num <= 10; num++) {
    // Check if num is equal to 5
    if (num === 5) {
        // Skip the current iteration
        continue;
    }
    // Print the current number
    console.log(num);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using `break` the statement.

// Initialize num to 1 and loop until num is less than or equal to 10
for (let num = 1; num <= 10; num++) {
    // Check if num is equal to 7
    if (num === 7) {
        // Break the loop
        break;
    }
    // Print the current number
    console.log(num);
}