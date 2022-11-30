// 1. it returns the right area for two numbers X

// What could go wrong?
// What edge cases we should cover?

// Invalid parameters
// 4. We need two parameters -> if not exactly 2, throw an error, it is the most important one

// 2. Incorrect parameter type -> if not a number we want to throw an error

// 3. Parameters should be greater than 0

// 5. This function should handle decimal numbers

export const rectangleArea = (height, width) => {
    // When we throw errors or return the function doesn't keep executing

    //handle first edge case
    if (height === undefined || width === undefined) {
        throw new Error("Function needs two parameters");
    }

    if (typeof height !== "number" || typeof width !== "number") {
        throw new Error(
            "Incorrect parameter type, height and width need to be numbers"
        );
    }

    if (width <= 0 || height <= 0) {
        throw new Error("Width and height need to be greater than 0");
    }

    return Number((height * width).toFixed(3));
};
