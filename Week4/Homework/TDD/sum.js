// A function that calculates the sum of numbers

// I want it to throw an error if the parameters are not numbers

// I want to be able to accept any number of parameters <= 1

// If no parameters throw an error

// What functions would be hard to test?
// - functions that don't return anything are hard to test
// - functions that do a lot - if you have a very long function, think if you could have multiple smaller functions
// - functions that have some random factor to them

export const sum = (...args) => {
    // throwing an error if no arguments
    if (args.length === 0) {
        throw new Error("This function requires at least one argument");
    }

    // make sure all args are numbers
    if (!args.every((arg) => typeof arg === "number")) {
        throw new Error("Parameters should be numbers only");
    }

    const final = args.reduce((acc, curr) => acc + curr);
    return final;
};
