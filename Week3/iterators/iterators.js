// 1. What are array iterators?
// built in methods, methods that operate on each individual element of an array

// 2. Why do we use iterators?
// a lot less syntax, more readible,

// we need to create a new array where we would store the values of our original array after we modify them

const numbers = [1, 2, 3, 4, 5];

// we want to create a new array that will have all the numbers increment by 1

// we need to create an empty array

const newNumbers = [];

// we need to loop through our array
// increment each number
// push that incremented number to the new array

for (let i = 0; i < numbers.length; ++i) {
    newNumbers.push(numbers[i] + 1);
}

console.log(newNumbers);

// we want a new array with every number to the power of 2

const squareNums = [];

for (let i = 0; i < numbers.length; ++i) {
    squareNums.push(numbers[i] ** 2);
}

console.log(squareNums);

// MAP

// What callback functions are

// in javascript a function is just a value, which means we can pass it as parameter to other functions

function add(num1, num2) {
    console.log(`${num1} is number 1, ${num2} is number 2`);
    return num1 + num2;
}

const subtract = (a, b) => {
    console.log(`${a} is a, ${b} is b`);
    return a - b;
};

function doMath(x, y, callback) {
    return callback(x, y);
}

const answer = doMath(2, 5, subtract);
console.log(answer);

// const incrementedWithMapArray = numbers.map(/* callback function */);

// the callback function in map scpecifies what we want to do with each of the elements of our array

function addOne(num) {
    return num + 1;
}

const incrementedWithMapArray = numbers.map(addOne);

console.log(
    incrementedWithMapArray,
    "This is the result of map method called with addOne function"
);

// map method returns a new array
function squareNum(num) {
    return num * num;
}

const squareNumbsWithMap = numbers.map(squareNum);

console.log(squareNumbsWithMap);

// we want a new array with doubled numbers
// number, the parameter of my function represents one element of my array
// doesn't matter what you call the parameter, number could be pinapple for example
const doubledNums = numbers.map((number) => number * 2);

console.log(doubledNums, "doubled numbers");

// with arrow functions we can skip the return keyword and curly brackets if we only have one line of code

const decByOne = (num) => num - 1;
// These are the same
const decByOneFull = (num1) => {
    console.log(num1);
    return num1 - 1;
};

// console.log(decByOne(10));

const tripleNums = numbers.map((n) => {
    console.log(n, "this is an element of my array inside map");
    return n * 3;
});

console.log(tripleNums, "this is what map returned");

// return a string that says the array element is ... for each of the elements

const stringArr = numbers.map((element) => `The array element is ${element}`);

console.log(stringArr);

// what are the parameters of the map method

const strings = ["hello", "hi", "nology"];

const halfNums = strings.map((el, index, arr) => {
    // first parameter of map is the element of our array, the same as numbers[i] in a for loop
    console.log("The first parameter of map ", el);

    console.log("The second parameter of map ", index);

    console.log("The third parameter of map", arr);
});

// The map implementation, don't do this in real life

const myMap = (array, func) => {
    const newArray = [];
    for (let i = 0; i < array.length; ++i) {
        newArray.push(func(array[i]));
    }

    return newArray;
};

const numsForMyMap = [2, 3, 4];

console.log(myMap(numsForMyMap, (num) => num + 2));

// FILTER
// it returns a new array with elements that match a specified condition
// takes a callback function
// predicate function - a function that returns a single true of false
// returns an array where the result was truthy

function isEven(n) {
    return n % 2 === 0;
}

const numsToFilter = [2, 3, 4, 5, 10];

const filteredNums = numsToFilter.filter(isEven);

console.log(filteredNums);

const oddNums = numsToFilter.filter((number) => number % 2 !== 0);

console.log(oddNums);

// filter our numsToFilter to only leave numbers greater than 4

const greaterThan4 = numsToFilter.filter((num) => num > 4);

const names = ["Paul", "Edric", "Param", "Ashley"];
// a new array with names that are exactly 5 letters long

const equalToFive = names.filter((name) => name.length === 5);

// our own implementation of filter - just for learning purposes

const myFilter = (array, func) => {
    const newArray = [];

    for (const item of array) {
        if (func(item)) {
            newArray.push(item);
        }
    }
};

// FIND
// returns a single value, the first value that matches our condition
// takes in predicate function

const first5LetterName = names.find((name) => name.length === 5);

console.log(first5LetterName);

// EVERY
// sometimes we need to check if ALL elements of our array meet a certain condition
// returns a true if yes
// and a false if no

// returns false, because there are elements that are shorter than 5 letters in letters array
const isEveryNameFiveOrLonger = names.every((n) => n.length >= 5);
console.log(isEveryNameFiveOrLonger);

// returns true, because every name in names array is at least 4 letters long
const isEveryNameFourOrLonger = names.every((name) => name.length >= 4);
console.log(isEveryNameFourOrLonger);

// SOME
// tell us if at least one element meets a certain condition
const arrayHasAName4LettersLong = names.some((element) => element.length === 4);
console.log(arrayHasAName4LettersLong, "has a 4 letter name");

const arrayHasAName3LettersLong = names.some((element) => element.length === 3);
console.log(
    arrayHasAName3LettersLong,
    "has at least one name that's 3 letters long"
);

// forEach()
// we want to console.log each element

// names.forEach((name) => console.log(name));

const fromForEach = names.forEach((name) => console.log(name));
console.log(fromForEach, " this is what forEach returns");

// REDUCE - more on that tomorrow
