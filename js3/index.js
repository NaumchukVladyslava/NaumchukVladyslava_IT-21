///ЗАВДАННЯ 4
let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));
let operator = prompt("Введіть операцію,яку хочете виконати(+,-,*,/");

function calculate(a, b, operator) {
  switch (operator) {
  case '+':
    return a + b;
    break;
  case '-':
    return a - b;
    break;
  case '*':
    return a * b;
    break;
  case '/':
    return a / b;
    break;
  default:
    return 'Невідомий оператор';
    break;
  }
}

let result = calculate(a, b, operator);

alert("Результат: " + result)

//ЗАВДАННЯ 1

let age = Number(prompt("Введіть свій вік"));

if(age >= 0 && age <18){
  alert("Вам заборонено вхід!");
}
else if(age >= 18 && age <65) {
  alert("Ласкаво просимо!");
}
else if(age >= 65) {
  alert("Будь ласка, будьте обережні!");
}
else {
  alert("Не число!");
}

//ЗАВДАННЯ 2

let n = Number(prompt("Введіть число"))
for(let i=2; i <=n; i++){
  if(i % 2 === 0){
      console.log(i)
  }
}

//ЗАВДАННЯ 4

let random = Math.floor(Math.random() * 100) + 1;
let m;

do {
    m = Number(prompt('Виберіть число від 1 до 100'));

    if (m === random) {
        alert('Вітаємо! Ви вгадали число!');
    } 
    else if (m > random) {
        alert('Загадане число менше!');
    } 
    else {
        alert('Загадане число більше!');
    }

} while (m !== random);

//ЗАВДАННЯ 3

let x = Number(prompt("Введіть число"));
let y = 1;
let factorial = 1;

while(y<= x){
  factorial *=y;
  y++;
}

console.log("Факторіал числа: ", factorial);