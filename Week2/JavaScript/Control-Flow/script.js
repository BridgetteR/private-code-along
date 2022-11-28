// Control Flow

// It's the order in which our code is executed, by default it is done from top to bottom
// conditional statements
// for loops, while loops

// if block

// we want to be able to run different blocks of code based on some conditions

let x = 5;

x = 0;

// I want to print to the console if x is a truthy or a falsey value

if (x) {
    console.log("X is a truthy value");
}

// if(condition that needs to evalueate to true if we want the code to be executed) {
// The block of code that we want to run
// }

// if want to check if y is greater than 10

let y = 11;
y = 9;

if (y > 10) {
    console.log("Y is greater than 10");
} else {
    console.log("Y is less than or equal to 10");
}

// if(condition that needs to evalueate to true if we want the code to be executed) {
// The block of code that we want to run
// } else {
// block of code that will run if the condition is false
// }

let score = 91;

score = 82;

if (score > 90) {
    console.log("You got an A");
} else if (score > 80) {
    console.log("You got a B");
} else if (score > 70) {
    console.log("You got a C");
} else {
    console.log("You need to retake the test");
}

// New Section
const myNumber = 2;

if (myNumber > 1) {
    console.log("Number is greater than 1");
} else if (myNumber > 0) {
    console.log("My number is greater than 0");
} else {
    console.log("The number is negative or 0");
}

if (myNumber <= 0) {
    console.log("The number is negative or 0");
}

if (myNumber > 1) {
    console.log("The number is greater than 1");
}

if (myNumber > 0) {
    console.log("The number is greater than 0");
}

// What is an alternative to an if block?
// Switch statement

const errorCode = 2;

switch (errorCode) {
    // if (errorCode === 0) {
    // console.log()
    // }
    case 0:
        console.log("Program has run successfully");
        break;
    case 1:
        console.log("Error code 1");
        break;
    case 2:
        console.log("Error code 2");
        break;
    case 3:
        console.log("Error code 3");
        break;
    default:
        console.log("Error code not valid");
}

const input = "e";

switch (input) {
    case "e":
    case "E":
    case "exit":
        console.log("The app is exiting...");
        break;
    case "c":
    case "C":
    case "continue":
        console.log("Continue execution...");
        break;
    default:
        console.log("Command not found");
}

// New Seciton
const age = 13;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You are too young");
}

// ternary operator
// The following and the above are the same

age >= 18 ? console.log("You can vote") : console.log("You are too young");

// condition ? this happens if true : this happens if false
