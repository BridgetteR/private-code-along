// MVP:
// Create a function with a for loop that will add all the numbers up to n
// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result
// sum(10) => 55
// Bonus:
// Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)

// function sum(n) {
//     for (n; n < 55; ++n) {
//         console.log(n);
//     }
// }

// sum(10);

// The above doesn't work, don't know what was asked.

// function sum(n) {
//     let value = 0;
//     let addArray = [];

//     for (i = 1; i <= n; ++i) {
//         addArray.push(i);
//         value += i;
//     }
//     return `${addArray.join("+")} = ${value}`;
// }

// console.log(sum(5));

// The above works but is confusing

// Challenge - add all numbers up to n

const sum = (n) => {
    let finalValue = 0;

    for (let i = 1; i <= n; ++i) {
        console.log(i);
        finalValue += i;
    }
    return finalValue;
};

console.log(sum(10));

// Bonus

// Sn = n(n+1)/2

const sumWithFormula = (n) => {
    return (n * (n + 1)) / 2;
};

console.log(sumWithFormula(2));
console.log(sumWithFormula(10));
