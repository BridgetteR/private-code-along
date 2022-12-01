// promise hell
// we end up here with some kind of computation that depends on the result of another one
// some kind of async process that relies on the result of another async process
// the only place to access the value is .then

const rememberName = (input) => {
    console.log("Hi...");

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

rememberName("Remi").then((name) => {
    console.log(name + " how are you?");

    rememberLocation(name).then((location) =>
        console.log("How's the weather in " + location + "?")
    );
});

rememberName("Alex")
    .then((name) => {
        console.log(name + " how are you?");

        return name;
    })
    .then((name) => rememberLocation(name))
    .then((location) => console.log("How's the weather in " + location + "?"))
    .catch((e) => console.log(e.message));
