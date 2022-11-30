// MVP

// Create a function called delayedIncDec(n, mode, time) - this function needs to return a promise<number>
// the value of the promise should be n after incrementing or decrementing depending on the mode

// if mode is anything other than inc or dec - reject the promise

// n - some number

// mode - string - "inc", "dec"
// inc will cause the function to increment n by 1
// dec will cause the function to decrement by 1

// timeout - delay in ms - your function will return a promise after that time
// timeout should have a default value, if the function is called without the 3rd argument, it should default to 2500

// call this function three times with different numbers and values of dec and delay

const delayedIncDec = (n, mode, time = 2500) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mode !== "inc" && mode !== "dec") {
                reject("Mode needs to be inc or dec");
            } else {
                if (mode === "inc") {
                    resolve(++n);
                } else {
                    resolve(--n);
                }
            }
        }, time);
    });
};

delayedIncDec(2, "inc", 3000)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });

delayedIncDec(5, "dec")
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });

delayedIncDec(8, "haha", 1000)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });
