// What is async await?
// How do we write it?
// Why it's good/what it's good for?

// async await it JUST syntactic sugar - nicer syntax for something else
// it does exactly the same thing but we just have a nicer way of writing it
// there's no extra functionality assigned to it

// ASYNC
// used at the beginning of a function definition

async function someFunction() {} // This function is now asynchronous

const anotherFunction = async () => {}; // this is now asynchronous

// EVERY async function ALWAYS returns a promise

async function answer() {
    return 22; // this will return a promise
}

const result = answer();
// console.log(result);
// result.then((num) => console.log("The answer is " + num));

const problem = async () => {
    throw new Error("Oops, we've got a problem"); // it will be converted into a rejected promise
};

// problem()
//     .then((value) => console.log("hello" + value))
//     .catch((e) => console.log(e.message));

// on its own ASYNC isn't very useful

// AWAIT

// we can only use AWAIT inside async functions
// await pauses the execution of our code until the promise we are waiting for gets resolved

const slowAdd = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 2000);
    });
};

async function printAnswer(a, b) {
    console.log(`waiting for the result of adding: ${a} and ${b}`);

    const answer = await slowAdd(a, b);
    // using the AWAIT keyword, it knows slowAdd will take time to return  the outcome so it's going to sit there and wait for the answer and ONLY THEN it will do the next step
}

// printAnswer(3, 6);
