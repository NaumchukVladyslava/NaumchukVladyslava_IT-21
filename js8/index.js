const form = document.querySelector("#form");

const name = form.querySelector("#name");
const email = form.querySelector("#email");
const phone = form.querySelector("#phone");
const password = form.querySelector("#password");

//Завантаження при відкритті сторінки

window.addEventListener("load", () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
        const formData = JSON.parse(savedData);
        name.value = formData.name;
        email.value = formData.email;
        phone.value = formData.phone;
        password.value = formData.password;
    }
});

//При перезавантаженні сторінки дані автоматично завантажуються у відповідні поля

form.addEventListener("input", () => {
    const formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    };
    localStorage.setItem("formData", JSON.stringify(formData));
});

//Авторизація

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("formData"));

    if (
        savedData && email.value === savedData.email && password.value === savedData.password
    ) {
        alert("Авторизація успішна");
    } else {
        alert("Невірний email або пароль");
    }
});

//Можливість редагувати phone та name, при цьому зміни зберігаються в localStorage

name.addEventListener("input", () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
        const formData = JSON.parse(savedData);
        formData.name = name.value;
        localStorage.setItem("formData", JSON.stringify(formData));
    }
});

phone.addEventListener("input", () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
        const formData = JSON.parse(savedData);
        formData.phone = phone.value;
        localStorage.setItem("formData", JSON.stringify(formData));
    }
});

//Очищення даних через кнопку

const resetButton = form.querySelector("#reset");
resetButton.addEventListener("click", clearData);

function clearData() {
    localStorage.removeItem("formData");
    name.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
};
