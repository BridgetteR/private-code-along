// Operators in JavaScript

// Addition +
// Subtraction -
// Multiplication *
// Division /
// Power of **
// Increment => ++
// Decrement => --

let value = 124;
let result = value / 2;
result = result * 99;
result = result - 87 + 9;
result = result ** 3;

// ++ will increment value by 1
//
console.log(result++); // 001
console.log(++result); // 002

console.log(result--); // 002
console.log(result); // 001

const firstName = "Bridgette";
const lastName = "Hold";
const fullname = firstName + " " + lastName;
console.log(fullname);

console.log("String + Number: ", "Bridgette" + 99);
console.log("Number + String: ", 1 + "6"); // 16
console.log("Number + String: ", 1 - "6"); // -5

// Shorthand symbols
// DRY - DON'T REPEAT YOURSELF

let score = 99;
// score = score + 1;
score += 1;
score /= 10;
score *= 99;
score -= 8;
score **= 2;

console.log(score);

// Why do we use Booleans in JavaScript?
// How do we compare values or variables?
// What kind of comparisons can we do in JavaScript?
// What is the modulo "operator"?

console.log("Greater Than", 5 > 3); // true
console.log("Greater Than", 5 > 10); // false

console.log("Less Than", 5 < 8); // true
console.log("Less Than", 5 < 3); // false
console.log("Less Than", 5 < 5); // false

console.log("Greater Than or Equal to", 5 >= 6); //false
console.log("Greater Than or Equal to", 18 >= 12); //true

console.log("Less Than or Equal to", 5 <= 4); // false
console.log("Less Than or Equal to", 5 <= 5); // true

console.log("Equal", 7 == 7); // true
console.log("Equal", 7 == "7"); // true

console.log("Equal: Typed", 7 === "7"); // false
console.log("Equal: Typed", 7 === 7); // true

console.log("Not Equal", 7 != "7"); // false
console.log("Not Equal", 7 != 7); // false

// The modulo operator gives us the remainder of a number divided by another

console.log(10 % 2); // there is 5 times 2 in 10, we're left with 0
console.log(15 % 4); // there is 3 times 4 in 12, we're left with 3

// Multiple Expression Handling
// && - AND or || - OR

// AND &&
// For an && expression to be evaluated to true, both sides of the expression need to be true. If one side is false, all is false.
console.log("AND", 3 < 5 && 6 < 8); // true
console.log("AND", 3 > 5 && 6 < 8); // false
console.log("AND", 3 < 5 && 6 < 8 && 4 == "4"); // true
console.log("AND", 3 < 5 && 6 < 8 && 4 === "4"); // false

// OR ||
//For an OR expression to be evaluated to true, either side of the OR needs to be true. Both sides need to be false for the OR expression to be false.
console.log("OR", 10 != 9 || 9 == 9); // true
console.log("OR", 10 === 9 || 9 === 9); // true
console.log("OR", 10 === 9 || 9 !== 9); // false

console.log("AND + OR", 3 < 5 && (6 < 3 || 5 > 3)); // true

// Truthy and Falsey Values

// Falsey Values
// NaN
// null
// undefined
// 0
// ""
// false

// Truthy
// true
// anything that's not in the above list

// Lazy Evaluations
let x = 5;
let y = 3 < 4;
console.log(3 < 4 || 5 != 5);
console.log(x || 5 < 6); // 5
console.log(y || 5 < 6); // 5
console.log(x && 6 < 6); // false
console.log(!x && 5 < 6); // false

let myString = "My String";
console.log(!myString); // false
console.log(myString || 7 > 5); // "My String"
