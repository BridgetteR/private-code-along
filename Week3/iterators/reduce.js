// REDUCE

// it takes in a function with at least 2 parameters

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((total, current) => {
    console.log({ total, current });
    return total + current;
});

console.log(sum);

let sumOfNum = 0;

for (let i = 0; i < numbers.length; ++i) {
    console.log(sumOfNum, "sumOfNum", i, "i");
    sumOfNum += numbers[i];
}

console.log(sumOfNum);

// example with a string

const letters = ["n", "o", "l", "o", "g", "y"];

// I don't want an array of strings, I want a single string -. I can add my letters

const word = letters.reduce((acc, current) => {
    console.log({ acc, current });
    return acc + current;
});

console.log(word);

let num = 1;

//num += 1; // num = num + 1

console.log(num);

const numbersTwo = [2, 4, 6];

// if I don't pass the initial value of the accumulator, the first element of the array becomes the initial value of the accumulator, the second el is the first current
const numTwoSum1 = numbersTwo.reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr;
});

console.log("break");

// optional second argument - initial value of the accumulator - that can be anything you want
const numTwoSum2 = numbersTwo.reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr;
}, 0);

const someName = "Martyna Sandra Krol";

const initials = someName.split(" ").reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr[0];
}, "My initials are ");

console.log(initials);

// we have an array of numbers, we want a new array with doubled numbers

const numsToDouble = [2, 3, 4];

const doubNums = numsToDouble.reduce((acc, curr) => {
    // curr * 2 needs to end up on array
    console.log({ acc, curr });
    acc.push(curr * 2);
    return acc;
}, []);

// first iteration:
// I passed two arguments to my reduce -> I added that initial value of the accumulator, so it doesn't default to first array element
// acc: [], curr: 2
// we are pushing 2 * 2 to that array
// we are returning the acculumator -> accumulator is now [4]

// second iteration:
// accumulator is now [4]
// we are pushing 4 * 2 to that accumulator -> [4, 6]

// accumulator is [4, 6]
// current is 4
// we need to multiply 4 * 2, push it to our accumulator
// we end up with acc being [4, 6, 8]

// no more iterations to make, we return the acc at the end

const numsToIncrease = [1, 2, 3];

// use it as I would map
console.log("break");

const increasedNums = numsToIncrease.reduce((acc, curr) => {
    console.log({ acc, curr });
    acc.push(curr + 1);
    return acc;
}, []);

console.log(increasedNums);

// first iteration:
// accumulator is an empty array, current is the first array elemenr -> 1
// we are adding 1 to 1, pushing it to acc -> empty array, push 2 -> [2]

// second iteration:
// accumulator is [2], current is the second element of the array -> 2
// we are adding 1 to 2 -> 3
// we are pushing 3 to our acc -> [2, 3]

// third iteration:
// accumulator is [2, 3], current is the third element of the aray -> 3
// we are adding 1 to 3 -> 4
// we are pushing 4 to our acc -> [2, 3, 4]

// no more iterations, which means we return the final value of acc

// ----------------------------------------------------------------------------------

// using REDUCE as filter and map combined

// I want an array of only even numbers, doubled

const numToFilterAndMap = [2, 3, 4, 5, 6];

// I want to filter to leave only even numbers
const evenNums = numToFilterAndMap.filter((num) => num % 2 === 0);

console.log(evenNums);

// I want a new array with double the numbers

const double = evenNums.map((num) => num * 2);

console.log(double);

// Let's try and do the same thing with reduce

const final = numToFilterAndMap.reduce((acc, curr) => {
    console.log({ acc, curr });
    console.log(curr % 2 === 0, "checking if current is even");
    if (curr % 2 === 0) {
        acc.push(curr * 2);
    }
    return acc;
}, []);

console.log(final);
