// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log("Task 1: Book Object:", book);

// Task 2: Access and log the title and author properties of the book object
console.log("Task 2: Book Title:", book.title);
console.log("Task 2: Book Author:", book.author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author
book.getTitleAndAuthor = function() {
    return `${this.title} by ${this.author}`;
};
console.log("Task 3: Title and Author:", book.getTitleAndAuthor());

// Task 4: Add a method to the book object that updates the book's year property
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(2020);
console.log("Task 4: Updated Book Object:", book);

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library
const library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        book // Adding the previously created book object
    ]
};
console.log("Task 5: Library Object:", library);

// Task 6: Access and log the name of the library and the titles of all the books in the library
console.log("Task 6: Library Name:", library.name);
library.books.forEach((b, index) => {
    console.log(`Task 6: Book ${index + 1} Title:`, b.title);
});

// Activity 4: The `this` Keyword

// Task 7: Add a method to the book object that uses `this` keyword
book.getTitleAndYear = function() {
    return `${this.title} was published in ${this.year}`;
};
console.log("Task 7: Title and Year:", book.getTitleAndYear());

// Activity 5: Object Iteration

// Task 8: Use a `for...in` loop to iterate over the properties of the book object
console.log("Task 8: Iterating with `for...in` loop:");
for (const prop in book) {
    if (book.hasOwnProperty(prop)) {
        console.log(`${prop}: ${book[prop]}`);
    }
}

// Task 9: Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object
console.log("Task 9: Object.keys and Object.values:");
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

// Feature Request 1: Book Object Script
console.log("Feature Request 1: Book Object Script");
const bookFeature = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    },
    updateYear(newYear) {
        this.year = newYear;
    },
    getTitleAndYear() {
        return `${this.title} was published in ${this.year}`;
    }
};
console.log("Feature Request 1: Book Object:", bookFeature);
console.log("Feature Request 1: Title and Author:", bookFeature.getTitleAndAuthor());
bookFeature.updateYear(2021);
console.log("Feature Request 1: Updated Book Object:", bookFeature);
console.log("Feature Request 1: Title and Year:", bookFeature.getTitleAndYear());

// Feature Request 2: Library Object Script
console.log("Feature Request 2: Library Object Script");
const libraryFeature = {
    name: "Town Library",
    books: [
        { title: "Moby Dick", author: "Herman Melville", year: 1851 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        bookFeature
    ]
};
console.log("Feature Request 2: Library Object:", libraryFeature);
console.log("Feature Request 2: Library Name:", libraryFeature.name);
libraryFeature.books.forEach((b, index) => {
    console.log(`Feature Request 2: Book ${index + 1} Title:`, b.title);
});

// Feature Request 3: Object Iteration Script
console.log("Feature Request 3: Object Iteration Script");
console.log("Feature Request 3: Iterating with `for...in` loop:");
for (const prop in bookFeature) {
    if (bookFeature.hasOwnProperty(prop)) {
        console.log(`${prop}: ${bookFeature[prop]}`);
    }
}
console.log("Feature Request 3: Object.keys and Object.values:");
console.log("Keys:", Object.keys(bookFeature));
console.log("Values:", Object.values(bookFeature));
