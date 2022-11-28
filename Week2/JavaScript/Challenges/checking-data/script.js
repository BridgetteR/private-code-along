// Challenge 1
let n = 10;

if (n % 2 === 0) {
    console.log("n is even");
} else {
    console.log("n is odd");
}

// Challenge 2
let x = 5;
let y = 10;

if (x > y) {
    console.log("x is greater than y");
} else if (x < y) {
    console.log("x is smaller than y");
} else if (x == y) {
    // Can just use an else statement here as there is no possibility of moving to the final stage I've written
    console.log("x is equal to y");
} else {
    console.log("How did you get here?");
}

// Challenge 3
let userInput = 2;

if (typeof userInput === "number") {
    console.log(userInput ** 2);
} else if (typeof userInput === "string") {
    console.log(userInput);
} else {
    console.log("Invalid Input");
}
