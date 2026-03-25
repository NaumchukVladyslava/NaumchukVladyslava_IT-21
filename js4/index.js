// ЗАВДАННЯ 1

let a = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
let average = sum / a.length;

let min = Math.min(...a);
let max = Math.max(...a);

a.sort((a, b) => a - b);

console.log("Масив:", a);
console.log("Середнє арифметичне:", average);
console.log("Мінімальне значення:", min);
console.log("Максммальне значення:", max);

// ЗАВДАННЯ 2

let people = [
    {name: "Vlada", age: 17},
    {name: "Andriy", age: 16},
    {name: "Karina", age: 25},
    {name: "Katya", age: 40},
    {name: "Vlad", age: 5},
];

const result = []

for (let person of people) { 
  if (person.age >= 18) {   
    result.push(person); 
  }
}

let sum2 = 0;

for (let i = 0; i < people.length; i++) {
  sum2 += a[i];
}
let average2 = sum2 / people.length;

console.log("Середнє арифметичне:", average);
console.log(result);

//ЗАВДАННЯ 3

let magazine = [
    {goods: "Chicken", category: "Meat"},
    {goods: "Milk", category: "Dairy"},
    {goods: "Strawberry", category: "Fruit"},
    {goods: "Potatoes", category: "Vegetables"},
    {goods: "Apples", category: "Fruit"}
];

let grouped = magazine.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = [];
    }
    acc[item.category].push(item.goods);
    return acc;
}, {});

for (let category in grouped) {
    console.log(`${category}: ${grouped[category].join(", ")}`);
}

// ЗАВДАННЯ 4

let students = {
    Vlada: {Math: 10, Physics: 9, Chemistry: 8},
    Andriy: {Math: 12, Physics: 11, Chemistry: 10},
    Karina: {Math: 7, Physics: 8, Chemistry: 9}
};

for (let student in students) {
    let grades = Object.values(students[student]);
    let avg = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);

    console.log(`${student}: середній бал = ${avg}/12`);
}

// ЗАВДАННЯ 5

let names = ["Vlada", "Andriy", "Karina", "David"];

let nameLengths = names.reduce((acc, name) => {
    acc[name] = name.length;
    return acc;
}, {});

console.log(nameLengths);