// Завдання 1
async function fetchWithTimeout(url, timeout) {
    let myPromise = new Promise((_, reject) => { 
    setTimeout(() => reject("Помилка"), timeout);
    });      
    
    const fetchPromise = fetch(url).then(res => {
    if (!res.ok) throw new Error("Помилка при отриманні даних");
    return res.json();
    });

    return Promise.race([fetchPromise, myPromise]);
}

async function Info() {
    let url = "https://jsonplaceholder.typicode.com/posts/1";
    let url1 = "https://jsonplaceholder.typicode.com/users/1";
    let timeout = 3000;

    let results = await Promise.allSettled([
        fetchWithTimeout(url, timeout),
        fetchWithTimeout(url1, timeout)
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Запит ${index + 1} успішний:`, result.value);
        } else {
            console.log(`Запит ${index + 1} помилка:`, result.reason);
        }
    });
};

Info();

// Завдання 3
async function fetchDataId(id) {
    return new Promise((resolve, reject) => {
        let randomtime = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000; //Math.floor(Math.random() * (max - min + 1)) + min

        setTimeout(() => {
            resolve(`Дані для ID: ${id} отримані за ${randomtime} мс`);
        }, randomtime);
    });
}

async function processData() {
    const parallelIds = [1, 2, 3];
    const parallelResults = await Promise.all(parallelIds.map(id => fetchDataId(id)));
    console.log("Паралельне виконання:");
    parallelResults.forEach(res => console.log(res));

    const sequentialIds = [4, 5, 6];
    console.log("Послідовне виконання:");
    const sequentialPromises = sequentialIds.map(id => fetchDataId(id));

    for await (const res of sequentialPromises) {
        console.log(res);
    }
}

processData();
