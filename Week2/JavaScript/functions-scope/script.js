// What is scope?

// Determines where we can access our variables from

// global scope

// block scope

// function scope

// global variable, accessable from anywhere in my code
const myName = "Bridgette";

if (myName.length > 10) {
    console.log("The name is more than 10 characters long", myName);
} else {
    console.log("The name is less than or equal to 10 characters long", myName);
}

function printMyName() {
    console.log(myName);
}

printMyName();

if (true) {
    // Local variable, exists only with in the scope of the if block
    let thing = "variable from if block";
    console.log(thing);
}

function printThing() {
    // any variable you create inside a function exists only in the context of that function
    let thing = "variable from my function";
    console.log(thing);
}

printThing();

let thing = "my global variable";
// console.log(thing);

const circleArea = (radius) => {
    const area = Math.PI * radius ** 2;
};

// This will give me an error that the radius is not defined, it only exists in the context of my function
// console.log(radius);

const functionOne = () => {
    const firstName = "John";
    return firstName;
};

const functionTwo = () => {
    // can I access firstName from here?
    const lastName = "smith";
    return lastName;
};

const myGlobal = "Global String";

const scope1 = (scopeOneArg) => {
    const myNumber = 123;

    // What can I access in here?
    console.log(scopeOneArg, 1);
    console.log(myNumber, 1);
    console.log(myGlobal, 1);

    const scope2 = (scopeTwoArg) => {
        const myValue = 345;

        // What can I access in here?
        console.log(myGlobal, 2);
        console.log(myNumber, 2);
        console.log(scopeOneArg, 2);
        console.log(scopeTwoArg, 2);
        console.log(myValue, 2);

        const scope3 = (scopeThreeArg) => {
            const anotherValue = 678;

            // What can I access in here?
            //myNumber, myValue, anotherValue, myGlobal
            console.log(scopeThreeArg);
            console.log(scopeTwoArg);
            console.log(scopeOneArg);
            console.log(myGlobal);
            console.log(myNumber, myValue, anotherValue);
        };

        scope3("scope three arg");
    };

    scope2("scope 2");
};

scope1("scope 1");

// Homework
// Research the stuff below

// Function purity, what are pure functions
