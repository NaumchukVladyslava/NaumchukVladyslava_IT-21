////ЗАВДАННЯ 1

let a = 10;
let b = 10.5;
let c = "Влада";
let d = true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

a = "Каріна";
b = false;
c = 20;
d = 5.5;

//Змінені типи
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

// Перетворення типів
let result = 5 + "10";
console.log("5 + '10' =", result, typeof result);

let trueNumber = Number(true);
let falseNumber = Number(false);

console.log("true ->", trueNumber);
console.log("false ->", falseNumber);

//Об'єкт
let x = {
    name: "Влада",
    age: 17,
    height: 1.65,
    student: true
};

// Виведення у форматі JSON
console.log("Об'єкт JSON:");
console.log(JSON.stringify(x));

///ЗАВДАННЯ 2

let i = Number(prompt("Загадайте число"));
let o = Number(prompt("Загадайте число"));
let p = Number(prompt("Загадайте число"));

// Середнє арифметичне
let average = ((i+o+p)/3);
console.log(average);

//Операції
console.log("Модуль числа:", Math.abs(average));
console.log("Округлення у більшу сторону:", Math.ceil(average));
console.log("Округлення у меншу сторону:", Math.floor(average));
console.log("Піднесення до степеня:", Math.pow(average, 2));

//Перевірка 
console.log("Чи ділиться без залишку на 2?", i % 2 === 0);
console.log("Чи ділиться без залишку на 2?", o % 2 === 0);
console.log("Чи ділиться без залишку на 2?", p % 2 === 0);

//Трикутник
if (i + o > p && i + p > o && o + p > i) {
    console.log("Трикутник може існувати");
} else {
    console.log("Трикутник не може існувати");
}

//ЗАВДАННЯ 3

let m = Number(prompt("Введіть перше число"));
let n = Number(prompt("Введіть друге число"));
let v = Number(prompt("Введіть третє число"));

let max = Math.max(m, n, v);
let min = Math.min(m, n, v);

console.log("Найбільше число:", max);
console.log("Найменше число:", min);

//Перевірка чи хоча б одне число є парним
let hasEven = (m % 2 === 0) || (n % 2 === 0) || (v % 2 === 0);
console.log("Чи є парне число?", hasEven);

//Складна умова
let condition = (m > n && n < v);
console.log("Чи виконується складна умова?", condition);

//Чи є число простим
function abc(num) {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("Чи є m простим числом?", abc(m));
console.log("Чи є n простим числом?", abc(n));
console.log("Чи є v простим числом?", abc(v));

//ЗАВДАННЯ 4

let name = prompt("Як вас звати?");
let birthYear = Number(prompt("Якого року ви народились?"));
let city = prompt("В якому місті ви проживаєте?");

//Розрахунок віку 
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log("Вік:", age);

//Дитина, підліток, дорослий, літня людина
if (age >= 0 && age <= 12) {
    console.log("Ви дитина.");
} else if (age >= 13 && age <= 17) {
    console.log("Ви підліток.");
} else if (age >= 18 && age <= 64) {
    console.log("Ви дорослий.");
} else if (age >= 65) {
    console.log("Ви літня людина.");
}

//Перевірка столиці
let country = "України";
let capital = "Київ";

// Перевірка на столицю
if (city.toLowerCase() === capital.toLowerCase()) {
    console.log(`Ви живете у столиці ${country}`);
} else {
    console.log(`Ви не живете у столиці ${country}`);
}
