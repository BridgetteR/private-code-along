// 1. What is a for loop?
// A way to run our code multiple times, one of the use cases would be to iterate through an array

// Writing code this way is time consuming and error prone, it's not easy to implement changes
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// an alternative and a better way to do it is to use a for loop

for (let i = 0; i < 5; ++i) {
    console.log(i);
}

// let i = 0 -> initial value
// i < 5 - condition - the loop will run until this condition is no lnger true
// ++i -> update our initial value so the loop doesn't run forever

let i = 0;
let j = 0;
console.log(++i);
console.log(j++);

// first time my code runs
// i = 0
// console.log(0)
// ++i -> we are adding 1 to i, so at the end of this iteration i is 1

// i = 1
// console.log(1)
// ++i -> i = 2

// i = 2
// console.log(2)
// ++i -> i = 3

// i = 3
// console.log(3)
// ++i -> i = 4

// i = 4
// console.log(4)
// ++i -> i = 5

// -------------------------------------------------------------------------------------------

// How to loop through arrays

const students = ["Tomo", "Tim", "Luke", "Alex"];

for (let index = 0; index < students.length; ++index) {
    console.log(students[index]);
}

// we want to create a new array with the same names but all uppercase

// this is an empty array where I will push my new values/modified values from my original array
const upperCaseStudents = [];

for (let i = 0; i < students.length; ++i) {
    let student = students[i].toUpperCase();
    upperCaseStudents.push(student);
}

console.log(upperCaseStudents);

// below is an example, using letters.toString() works the same

let letters = ["n", "o", "l", "o", "g", "y"];
let str = "";

for (let i = 0; i < letters.length; ++i) {
    str += letters[i].toUpperCase();
}

console.log(str);

// loop through arrays backwards

const reversed = [];

for (let i = students.length - 1; i >= 0; --i) {
    console.log(students[i], i);
    reversed.push(students[i]);
}

console.log(reversed);
console.log(students);

// break
const names = ["daniel", "ella", "jack", "john"];

const toFind = "ella";

let found = false;

for (let i = 0; i < names.length; ++i) {
    console.log(i, names[i]);
    if (names[i] === toFind) {
        found = true;
        // early exit out of my loop
        break;
    }
}

// continue

let someString = "this is a sentence";

let count = 0;
let vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < someString.length; ++i) {
    const char = someString.charAt(i); // someString[i]

    if (vowels.includes(char) || char === " ") {
        continue;
    }

    console.log(char, i);
    count += 1;
}
console.log(count);

// While Loop

// Generate a random number

console.log(Math.ceil(Math.random() * 10));
let num = Math.ceil(Math.random() * 10);

// I don't know how many times I'll have to generate a number to get 5
// We can use a while loop for this
while (num !== 5) {
    console.log(`The random number is ${num}`);
    num = Math.ceil(Math.random() * 10);
}

console.log(num);
