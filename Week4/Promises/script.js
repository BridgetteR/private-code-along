// What are promises?
// What is asynchronous programming?
// Blocking vs. Non-Blocking code
// Why do promiseS?
// What is an API

// ----------------------------------------

// JavaScript is a single-threaded language

// console.log("I'll be first");
// console.log("I'll be second");
// console.log("I'll be third");

// but what if things took longer time?

// Blocking code - cooking popcorn in a microwave

// Put the popcorn in the microwave
// set timer
// wait for it to finish
// be there to watch it

// Blocking code

// for loops, while loops
function wait(ms) {
    let start = Date.now();
    let now = start;

    while (now - start < ms) {
        now = Date.now();
    }
}

// console.log("I am before my wait function");
// wait(8000);
// console.log("I am after the wait function");

// document.getElementById("btn").addEventListener("click", () => {
//     wait(3000);
//     alert("You clicked the button");
// });

// Non-blocking code

// setTimeout
console.log("I am before set timeout"); // 1

// An asynchronous operation, takes in two arguments, a function and a delay in ms
// setTimeout(() => {
//     console.log("I am inside set timeout 2s"); // 4
// }, 2000);

// setTimeout(() => {
//     console.log("I am inside set timeout 1s"); // 3
// }, 1000);

// console.log("I am after the set timeout"); // 2

console.log("Hi");

setTimeout(() => {
    console.log("from setTimeout");
}, 0);

console.log("hello");

// Promises

// Disclaimer - today we will look at how to create promises, but in real life you will be working with things that return promises, knowing how to consume promises is a lot more important than knowing how to create them

// API

// Food ordering app
// We need to know what restaurants we should list
// We need to know their menus
// We need to know their prices
// We need to know their address
// We need to know what food is available on what day
// We need to know whensomething is sold out...

// All of this information will be coming from a database

// We can do this using an API

// API stands for Application Programming Interface

// Server needs time to respond - how much time?
// We don't know, we are not able to predict

// Promises are JavaScript objects, they represent an outcome of an asynchronous operations
// They can have three states

// pending - while we wait for the response
// fulfilled - we got the data
// rejected - things went wrong, for example server is down
