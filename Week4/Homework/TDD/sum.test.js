import { sum } from "./sum";
// A function that calculates the sum of numbers

// I want it to throw an error if the parameters are not numbers

// I want to be able to accept any number of parameters <= 1

// If no parameters throw an error

// What functions would be hard to test?

const paramTypeError = new Error("Parameters should be numbers only");
const noArgError = new Error("This function requires at least one argument");

describe("Tests cases for a function that sums values", () => {
    it("calculates a sum of valid numbers", () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(3, 3, 3, 3, 3)).toBe(15);
        expect(sum(6)).toBe(6);
        expect(sum(-2, -2, -1)).toBe(-5);
        expect(sum(1.5, 1.5, 1.5)).toBe(4.5);
    });

    it("should have all parameters of type number", () => {
        expect(() => {
            sum(1, [2], "3");
        }).toThrow(paramTypeError);

        expect(() => {
            sum([1], "41", 2, 3);
        }).toThrow(paramTypeError);

        expect(() => {
            sum(2, true, {});
        }).toThrow(paramTypeError);
    });

    it("should throw an error if no arguments are passed", () => {
        expect(() => {
            sum();
        }).toThrow(noArgError);
    });
});
