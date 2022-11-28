// What are functions?
// A piece of code that does something with data
// A blueprint of what we want to do

// Why do we need them?
// We don't want to repeat our code
// We want to run the same block of code multiple times

const coach1 = "Remi";
const coach2 = "Sandra";
const coach3 = "Callum";

console.log(`Hi, my name is ${coach1}`);
console.log(`Hi, my name is ${coach2}`);
console.log(`Hi, my name is ${coach3}`);

// this function doesn't have a specified return value, it will have the default return value
function sayHi(coachName) {
    //This will be the code that I want to run every time I call this function
    console.log(`Hi, my name is ${coachName}`);
}

// call my function as many times as I want with different coach names
sayHi(coach1);
sayHi(coach2);
sayHi(coach3);
sayHi("Martyna");
sayHi("Aidan");

function sum(numOne, numTwo) {
    return numOne + numTwo;
}

sum(10, 11);

const result = sum(10, 11);

console.log(result);

// a function that calculates the area of a triangle
function triangleArea(width, length) {
    return width * length * 0.5;
}

console.log(triangleArea(15, 12.5));
console.log(triangleArea(15, 5));
console.log(triangleArea(15, 1212));
console.log(triangleArea(15, 12000));
console.log(triangleArea(15, 456));

// function that return the discount for a meal at a restaurant based on age
// under 12 - 80%
// under 18 - 50%
// over 18 and 18 - no discount

function discount(age) {
    if (age < 0) {
        return "not a valid age";
    }

    if (age < 12) {
        return "80%";
    } else if (age < 18) {
        return "50%";
    } else {
        return "No Discount";
    }
}

function discountSwitch(age) {
    switch (true) {
        case age < 0:
            return "invalid age";
        case age < 12:
            return "80";
        default:
            return "no discount";
    }
}

console.log(discount(12));
console.log(discount(18));
console.log(discount(20));
console.log(discount(8));

console.log(discountSwitch(12));
console.log(discountSwitch(18));
console.log(discountSwitch(20));
console.log(discountSwitch(8));

// Where do we declare our functions?

// it depends on what function syntax you use

console.log(subtract(1, 1));
console.log(subtract(1, 10));
console.log(subtract(10, 1));

function subtract(num1, num2) {
    return num1 - num2;
}

// arrow functions

const subtractArrow = (num1, num2) => {
    return num1 - num2;
};

console.log(subtractArrow(4, 2));
