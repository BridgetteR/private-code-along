const rememberName = (input) => {
    // console.log("Hi...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input !== "string") {
                reject(new Error("That's not a real name"));
            }
            resolve(input);
        }, 2000);
    });
};

// rememberName("Martyna").then((name) => console.log(name + " how are you?"));

const rememberLocation = (name) => {
    const locations = {
        remi: "Sydney",
        martyna: "Melbourne",
        alex: "Melbourne",
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (locations[name.toLowerCase()]) {
                resolve(locations[name.toLowerCase()]);
            }
            reject(new Error("Oops, I can't remember where you live"));
        }, 1500);
    });
};

// if we want to catch the error in this case

async function smallTalk(input) {
    try {
        console.log("Hello...");
        const name = await rememberName(input); // wait to remember name
        console.log(`${name}, how are you?`);
        const location = await rememberLocation(name); // wait to remember location

        if (location == "Sydney") {
            throw new Error("I don't like this city");
        }
        console.log(`How's the weather in ${location}?`);
    } catch (e) {
        console.log(e.message);
    }
}

smallTalk("Remi");

console.log("I'm doing something else at the same time");
