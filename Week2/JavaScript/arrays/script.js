// What are arrays?

// Collection of data, like variables, other arrays, objects
// JavaScript way of creating lists

const coach1 = "Sandra";
const coach2 = "Remi";
const coach3 = "Cal";

console.log(coach1);
console.log(coach2);
console.log(coach3);

// I can create a coaches array, store all the values under one variable name

// literal notation

const coaches = [coach1, coach2, coach3, "Martyna"];

console.log(coaches);

// What if I wanted to get access to just one element of an array?
// Each element in an array has an index
console.log(coaches[0]);
console.log(coaches[1]);
console.log(coaches[2]);

// How could I access the last element from an array?

// The length property gives us the number of elements in an array, the last item will always have the index of length - 1
const lastItem = coaches.length - 1;
console.log(coaches[lastItem]);

// array constructor

const myArray = new Array(1, 2, 3);

console.log(myArray);

// Creates an array with 5 empty slots
const anotherArray = new Array(5);

console.log(anotherArray);
console.log(anotherArray.length, anotherArray[0], anotherArray[1]);

// sometimes you need to create an array filled with some values
const myArrayOfZeros = new Array(4).fill(0);

console.log(myArrayOfZeros);

// array method, property

// Adding or removing items from an array

// push - adds elements to the end of the array

const students = [];
console.log(students.length);

students.push("Tim");

console.log(students.length);
console.log(students);

students.push("Paul");

console.log(students.length);
console.log(students);

students.push("Joanne");
students.push("Param");
students.push("Jessie");

console.log(students);

// Adding elements to the start of our array

// unshift

students.unshift("Margarita");
students.unshift("Luke");

console.log(students);

// reassigning a new value to a certain element
students[0] = "Edric";
students[3] = "Ayush";

console.log(students);

// Removing elements from an array
// Two methods
// remove elements from the start
// shift

students.shift();
students.shift();
students.shift();
students.shift();
console.log(students);

// remove elements from the end
// pop

students.pop();
console.log(students);

students.pop();
students.pop();
console.log(students);

// adding something to an array without methods
console.log(students.length);
students[2] = "Tim";
console.log(students);

// array iterators - this will come later

// includes
console.log(students.includes("Paul"));

// .indexOf
console.log(students.indexOf("Param"));

if (students.includes("Param")) {
    console.log("Param is one of the students");
}

if (students.indexOf("Param") > -1) {
    console.log("Param is one of the students");
}

// .join

// array of strings, turn into one string
console.log(students.join(" "));
