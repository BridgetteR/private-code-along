// capitalized, read only
const CATFACTS_URL = "https://catfact.ninja";

const getBreeds = async (pageNumber) => {
    const response = await fetch(`${CATFACTS_URL}/breeds?page=${pageNumber}`);
    const info = await response.json();
    // console.log(info.data);
    return info.data;
};

// getBreeds(3);

const button = document.querySelector("#getBreeds");

button.addEventListener("click", async () => {
    // get the page number from the DOM
    const input = document.querySelector("#pageNumber");

    const pageNumber = parseInt(input.value);

    if (!pageNumber) {
        alert("Please enter a page number");
    }

    // pass the number into getBreeds
    // getBreeds to return the right page

    const breeds = await getBreeds(pageNumber);
    console.log(breeds);

    // create li elements for each breed
    const listItems = breeds.map((breed) => {
        const element = document.createElement("li");
        const breedText = `${breed.breed} is from ${breed.country}`;
        const textNode = document.createTextNode(breedText);

        element.appendChild(textNode);
        return element;
    });

    // attach those li elements to the ul form the HTML

    const list = document.querySelector("#breeds");

    listItems.forEach((item) => list.appendChild(item));
});
