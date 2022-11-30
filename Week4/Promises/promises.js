// How to construct a promise

// fulfulled promise
// const myResolvedPromise = Promise.resolve("This is the value of my promise");

// console.log(myResolvedPromise);

// Rejected promise
// const rejectedPromise = Promise.reject("Something went wrong");

// console.log(rejectedPromise);

// -----------------------------

// Delay my promise to simulate waiting for a response from a server

const myPromise = new Promise((resolve, reject) => {
    // I want to delay it
    setTimeout(() => {
        // resolve("I am a fulfilled promise, you had to wait for me");
        reject("Error, server could not respond");
    }, 3000);
});

// console.log("I am before a promise");
// console.log(myPromise);
// console.log("I am after a promise");

// to access the value of a promise I need a .then method

console.log("I am before the promise");
myPromise
    .then((value) => {
        // This will happen when our promise is fulfilled
        console.log(value, "value of the promise");
    })
    .catch((error) => {
        // This will happen when our promise is rejected
        console.log(error, "rejected promise");
    });

console.log("I am after the promise, keep doing stuff...");
