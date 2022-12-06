const arr = [];

for (let i = 1; i < 100; i++) {
    arr.push(i);
}

const loadData = async () => {
    const start = new Date();

    for (let i = 1; i < arr.length; i++) {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    }

    const end = new Date();

    console.log("Without promise all: ", end - start);
};

// Below is a better version of above

const loadDataPromiseAll = async () => {
    const start = new Date();

    const promises = arr.map((promise) =>
        fetch(`https://jsonplaceholder.typicode.com/todos/${promise}`)
    );

    const result = await Promise.all(promises);
    const end = new Date();

    console.log("With promise all: ", end - start);
};

loadData();
loadDataPromiseAll();
