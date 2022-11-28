// Challenge: Capitalizing Odd Positioned Letters
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a

let stringVar = "sleepy";
// let stringArr = [];

// for (let i = 0; i < stringVar.length; ++i) {
//     if (i % 2 === 0) {
//         stringArr.push(stringVar[i]);
//     } else {
//         stringArr.push(stringVar[i].toUpperCase());
//     }

//     console.log(stringArr);
// }

// let stringNew = stringArr.join("");
// console.log(stringNew);

let finalStr = "";

for (let i = 0; i < stringVar.length; ++i) {
    if (i % 2 === 0) {
        finalStr += stringVar[i];
    } else {
        finalStr += stringVar[i].toUpperCase();
    }
}

console.log(finalStr, "final string");

// Challenge: Removing Vowels
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing
// E.g: calum => clm, rachel => rchl, martyna => mrtyn
// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r
// E.g: calum => calum, rachel => rchel, martyna => martyn

let vowels = ["a", "e", "i", "o", "u"];
function removeVowels(name) {
    let rslOfRemoveMethod = "";
    for (let i = 0; i < name.length; ++i) {
        if (!vowels.includes(name[i])) {
            rslOfRemoveMethod += name[i];
        }
    }
    return rslOfRemoveMethod;
}

console.log(removeVowels("calum"));
