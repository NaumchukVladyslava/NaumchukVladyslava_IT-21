// ЗАВДАННЯ 1

function addItem() {
    let text =  document.querySelector("#text");
    let value = text.value;
    let li = document.createElement("li");
    li.textContent = value;
    li.onclick = function () {
        li.remove();
    };
    document.querySelector("#list").appendChild(li);
    text.value = "";
}

function sortList() {
    let ul = document.querySelector("#list");
    let items = ul.querySelectorAll("li");
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push(items[i].textContent);
    }
    arr.sort();
    ul.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];

        li.onclick = function () {
            li.remove();
        };

        ul.appendChild(li);
    }
}

//ЗАВДАННЯ 2

let textBlock = document.querySelector("#textBlock");

let btn1 = document.querySelector("#bth1");
let btn2 = document.querySelector("#bth2");
let btn3 = document.querySelector("#bth3");
let btn4 = document.querySelector("#bth4");
let resetBtn = document.querySelector("#reset");

btn1.onclick = function () {
    textBlock.classList.toggle("red");
};

btn2.onclick = function () {
    textBlock.classList.toggle("big");
};

btn3.onclick = function () {
    textBlock.classList.toggle("bg");
};

btn4.onclick = function () {
    textBlock.classList.toggle("hidden");
};

resetBtn.onclick = function () {
    textBlock.style.color = "black";
    textBlock.style.fontSize = "16px";
    textBlock.style.backgroundColor = "transparent";
    textBlock.style.display = "block";
};

