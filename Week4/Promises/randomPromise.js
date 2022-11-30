// Creating a promise that randomly rejects or resolves - closer to a real life example

// funciton that returns a promise

// Static data, let's pretend that this comes from an API

const meals = [
    {
        name: "Pizza",
        type: "dinner",
    },
    {
        name: "Toast",
        type: "breakfast",
    },
    {
        name: "Fried Eggs",
        type: "breakfast",
    },
    {
        name: "Pasta",
        type: "dinner",
    },
    {
        name: "Roast Chicken",
        type: "dinner",
    },
];

const randomFood = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Math.random
            const randomIndex = Math.floor(Math.random() * array.length);

            // if the item in the array is dinner, resolve
            if (array[randomIndex].type === "dinner") {
                resolve(array[randomIndex]);
            } else {
                reject("Sorry, no dinner tonight");
            }

            // else reject
        }, 2000);
    });
};

randomFood(meals)
    .then((value) => {
        // This happens when the promise resolves
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        // This will happen when the promise is not pending anymore, doesn't matter if resolved or rejected
        console.log("I happen no matter what the state of my promise is");
    });

const btn = document.querySelector("button");
const dinner = document.querySelector("h2");
const err = document.querySelector("#error");
const loading = document.querySelector("#loading");

btn.addEventListener("click", () => {
    // call my random dinner funciton

    // When we click on the button to generate a new promise we will see a blank screen

    // This happens instantly after clicking the button
    err.innerText = "";
    dinner.innerText = "";
    loading.innerText = "Loading...";

    randomFood(meals)
        .then((meal) => {
            // This happens when the promise resolves
            // render it to the dom
            dinner.innerText = meal.name;
        })
        .catch((e) => {
            // This happens when it rejects
            err.innerText = e;
        })
        .finally(() => {
            loading.innerText = "";
        });

    // outside my then method or catch method I cannot access the value of my promise
    // I can only access the whole promise object
});
