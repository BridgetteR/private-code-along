// Challenge: Calculating Moon Orbits
// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359

function moonOrbits(days) {
    console.log((days / 27).toFixed(3));
    return (days / 27).toFixed(3);
}

moonOrbits(54);
moonOrbits(365);

// Challenge: Years to Days & Seconds
// MVP
// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

function ageInDays(age) {
    console.log("You are " + age * 365 + " days old!");
    return age * 365;
}

function ageInSeconds(age) {
    console.log("You are " + age * 31536000 + " seconds old!");
    return age * 31536000;
}

ageInDays(32);
ageInSeconds(32);

// Challenge: Return the Remainder from Two Numbers
// MVP
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

function remainder(par1, par2) {
    console.log(par1 % par2);
    return par1 % par2;
}

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);

// Challenge: Basketball Points
// MVP
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoP, threeP) {
    console.log(twoP * 2 + threeP * 3);
    return twoP * 2 + threeP * 3;
}

points(1, 1);
points(2, 2);
points(3, 3);
