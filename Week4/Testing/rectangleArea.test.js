import { rectangleArea } from "./rectangleArea";

const incorrectParam = new Error(
    "Incorrect parameter type, height and width need to be numbers"
);

describe("Test cases for a function that recalculates the area of a rectangle", () => {
    test("calculate the right area for two valid numbers", () => {
        expect(rectangleArea(5, 5)).toBe(25);
        expect(rectangleArea(500, 1234)).toBe(617000);
        expect(rectangleArea(1.2, 2.1)).toBe(2.52);
        expect(rectangleArea(1.456, 2.123)).toBe(3.091);
    });

    it("should throw an error for incorrect parameter type", () => {
        expect(() => {
            rectangleArea("hello", "world");
        }).toThrow(incorrectParam);
    });

    expect(() => {
        rectangleArea("hi", 3);
    }).toThrow(incorrectParam);

    expect(() => {
        rectangleArea([1, 2], 3);
    }).toThrow(incorrectParam);

    expect(() => {
        rectangleArea(true, 3);
    }).toThrow(incorrectParam);

    expect(() => {
        rectangleArea("hi", -7);
    }).toThrow(incorrectParam);

    expect(() => {
        rectangleArea(-7, "hi");
    }).toThrow(incorrectParam);

    expect(() => {
        rectangleArea(-2, -7);
    }).toThrow(new Error("Width and height need to be greater than 0"));

    it("should throw an error if less than 2 numbers are passed", () => {
        expect(() => {
            rectangleArea();
        }).toThrow(new Error("Function needs two parameters"));

        expect(() => {
            rectangleArea(1);
        }).toThrow(new Error("Function needs two parameters"));

        expect(() => {
            rectangleArea("rt");
        }).toThrow(new Error("Function needs two parameters"));
    });
});
