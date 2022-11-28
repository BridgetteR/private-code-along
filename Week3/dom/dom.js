// DOM - Document Object Model

// Why do we need DOM?

// How do we manipulate the DOM?

// 1. First thing we need to do is to select the element we want to work with

// I want to grab the input
// I want to store it in a variable so I don't have to grab it each time

const taskInput = document.querySelector("#taskInput");
console.log(taskInput);

const heading = document.getElementById("mainTitle");
console.log(heading);

const taskBtn = document.getElementById("taskBtn");

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

// const firstBtn = buttons[0];
// console.log(firstBtn);

const divs = document.getElementsByClassName("container");
console.log(divs);

const styleBtn = document.querySelector("#styleBtn");
console.log(styleBtn);

const body = document.querySelector("body");

// one of the properties each node has is classList
console.log(divs[0].classList);

// I selected the elements, I can run code whe user interacts with those elements

// TO DO LIST MVP
// 1. Create a button that allow to change styling of our page from light mode to dark mode and back

styleBtn.addEventListener("click", () => {
    body.classList.toggle("body--darkMode");
    heading.classList.toggle("heading--darkMode");

    for (let i = 0; i < divs.length; ++i) {
        divs[i].classList.toggle("container--darkMode");
    }

    buttons.forEach((btn) => {
        btn.classList.toggle("btn--darkMode");
    });

    // for (let i = 0; i < buttons.length; ++i) {
    //     buttons[i].classList.toggle("btn--darkMode");
    // }
});

taskBtn.addEventListener("click", () => {
    // if the value of the input is an empty string I want to alert the user
    if (taskInput.value === "") {
        return alert("Please enter a task");
    }
    console.log(taskInput.value);
});
