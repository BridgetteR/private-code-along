// Challenge 1
const day = 2;

switch (day) {
    case 1:
        console.log("The Day is Monday");
        break;
    case 2:
        console.log("The Day is Tuesday");
        break;
    case 3:
        console.log("The Day is Wednesday");
        break;
    case 4:
        console.log("The Day is Thursday");
        break;
    case 5:
        console.log("The Day is Friday");
        break;
    case 6:
        console.log("The Day is Saturday");
        break;
    case 7:
        console.log("The Day is Sunday");
        break;
    default:
        console.log("Invalid Input");
}

// Challenge 2
const parent1 = "brown";
const parent2 = "blue";

if (parent1 == "brown" && parent2 == "brown") {
    console.log(
        "Your eye colours are brown and brown, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%"
    );
} else if (
    (parent1 == "brown" && parent2 == "green") ||
    (parent1 == "green" && parent2 == "brown")
) {
    console.log(
        "Your eye colours are brown and green, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%"
    );
} else if (
    (parent1 == "brown" && parent2 == "blue") ||
    (parent1 == "blue" && parent2 == "brown")
) {
    console.log(
        "Your eye colours are brown and blue, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%"
    );
} else if (parent1 == "green" && parent2 == "green") {
    console.log(
        "Your eye colours are green and green, the chances of your child having blue eyes is <1%, brown is 75% and green is 25%"
    );
} else if (
    (parent1 == "green" && parent2 == "blue") ||
    (parent1 == "blue" && parent2 == "green")
) {
    console.log(
        "Your eye colours are green and blue, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%"
    );
} else if (parent1 == "blue" && parent2 == "blue") {
    console.log(
        "Your eye colours are blue and blue, the chances of your child having blue eyes is 99%, brown is 0% and green is 1%"
    );
} else {
    console.log("Invalid Eye Colour");
}
