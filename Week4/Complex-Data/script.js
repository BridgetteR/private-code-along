const coaches = [
    {
        id: 1,
        firstName: "Alex",
        lastName: "Baulderstone",
        age: 34,
        location: "Melbourne",
        cohorts: ["Poland", "New Zealand"],
        address: {
            number: 123,
            street: "Fake Street",
            suburb: "Melbourne",
            postcode: 3000,
        },
    },
    {
        id: 2,
        firstName: "Martyna",
        lastName: "Krol",
        age: 27,
        location: "Melbourne",
        cohorts: ["Poland", "New Zealand"],
    },
    {
        id: 3,
        firstName: "Remi",
        lastName: "Hoeppe",
        age: 25,
        location: "Sydney",
        cohorts: ["Poland", "New Zealand"],
    },
];

// All our array iterators are good choices
// Returning Arrays

console.log(
    "Coaches in Melbourne",
    coaches.filter((coach) => coach.location.toLowerCase() === "melbourne")
);

console.log(
    "Coaches in Sydney",
    coaches.filter((coach) => coach.location.toLowerCase() === "sydney")
);

console.log(
    "Coaches in their 20s",
    coaches.filter((coach) => coach.age >= 20 && coach.age < 30)
);

console.log(
    "Coaches who teach in Poland",
    coaches.filter((coach) => coach.cohorts.includes("Poland"))
);

console.log(
    "Array of just coaches full names",
    coaches.map((coach) => `${coach.firstName} ${coach.lastName}`)
);

// Return a single object

console.log(
    "Get coach by ID",
    coaches.find((coach) => coach.id === 1)
);

// Write a function to find any object in any array by ID
// HINT: 2 parameters

const findID = (arr, idNum) => {
    return arr.find((obj) => obj.id === idNum);
};

console.log(findID(coaches, 1));

// How can we find particular bits of data?
// How do I get postcode?
console.log(coaches[0].address.postcode);
