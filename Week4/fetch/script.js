/*
    FETCH
    What is fetch?
    How do we use it?
*/

// WHAT IS AN API?
// Application Programming Interface
// a way to interact between applications

/*
skyscanner - using airlines' APIs to talk to their websites and retrieve data

- Emirates API - checking for prices with Emirates
- Etihad API - checking for prices with Etihad
*/

// FETCH is not a part of JavaScript - it's in WEB APIs, we have access to it through the browser so we can't test it with node/terminal

// we need a html to connect to our script file

const myFetch = fetch("https://randomuser.me/api"); // returns a promise, we need to wait for it to process our request

// console.log(myFetch);

// myFetch
// .then((response) => response.json())
// .json() also returns a promise so I can add another .then
// .then((data) => console.log(data));

// making a web request
async function fetchUser() {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    console.log(data.results[0]);
    const { first, last, title } = data.results[0].name;
    console.log(title, first, last);

    document.querySelector("h2").innerText = `${title} ${first} ${last}`;
}

// fetchUser();

document.querySelector("button").addEventListener("click", () => {
    fetchUser();
});
