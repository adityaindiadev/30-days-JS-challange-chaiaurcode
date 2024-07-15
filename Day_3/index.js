// Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Task 2: Check if a person is eligible to vote
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}

// Activity 2: Nested If-Else Statements

// Task 3: Find the largest of three numbers
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log("The largest number is " + a);
    } else if (b >= a && b >= c) {
        console.log("The largest number is " + b);
    } else {
        console.log("The largest number is " + c);
    }
}

// Activity 3: Switch Case

// Task 4: Determine the day of the week
function getDayOfWeek(dayNumber) {
    let day;
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
    }
    console.log(day);
}

// Task 5: Assign a grade based on a score
function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log("The grade is " + grade);
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd
function checkEvenOdd(num) {
    let result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
    console.log(result);
}

// Activity 5: Combining Conditions

// Task 7: Check if a year is a leap year
function isLeapYear(year) {
    let result = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "The year is a leap year." : "The year is not a leap year.";
    console.log(result);
}

// Feature Requests

// 1. Number Check Script
function numberCheckScript(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// 2. Voting Eligibility Script
function votingEligibilityScript(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}

// 3. Day of the Week Script
function dayOfWeekScript(dayNumber) {
    let day;
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
    }
    console.log(day);
}

// 4. Grade Assignment Script
function gradeAssignmentScript(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log("The grade is " + grade);
}

// 5. Leap Year Check Script
function leapYearCheckScript(year) {
    let result = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "The year is a leap year." : "The year is not a leap year.";
    console.log(result);
}

// Example usage
checkNumber(5);               // Output: The number is positive.
checkVotingEligibility(20);   // Output: The person is eligible to vote.
findLargest(3, 7, 5);         // Output: The largest number is 7.
getDayOfWeek(1);              // Output: Sunday
getGrade(95);                 // Output: The grade is A
checkEvenOdd(4);              // Output: The number is even.
isLeapYear(2020);             // Output: The year is a leap year.

numberCheckScript(-3);        // Output: The number is negative.
votingEligibilityScript(16);  // Output: The person is not eligible to vote.
dayOfWeekScript(5);           // Output: Thursday
gradeAssignmentScript(82);    // Output: The grade is B
leapYearCheckScript(1900);    // Output: The year is not a leap year.
