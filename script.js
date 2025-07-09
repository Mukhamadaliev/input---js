let name = document.querySelector(".ism");
let email = document.querySelector(".gmail");
let number = document.querySelector(".nomer");
let message = document.querySelector(".area");
let button = document.querySelector(".btn");

// Inputlarni rang bilan belgilash
document.addEventListener('input', function () {
    if (name.value.length >= 5) {
        name.style.borderColor = "green";
    } else {
        name.style.borderColor = "red";
    }

    if (email.value.length >= 10) {
        email.style.borderColor = "green";
    } else {
        email.style.borderColor = "red";
    }

    if (number.value.length === 13) {
        number.style.borderColor = "green";
    } else {
        number.style.borderColor = "red";
    }

    if (message.value.length >= 20) {
        message.style.borderColor = "green";
    } else {
        message.style.borderColor = "red";
    }
});

// Tugma bosilganda tekshirish va chiqarish
button.addEventListener("click", function () {
    console.clear();
    console.log("Ism:", name.value);
    console.log("Email:", email.value);
    console.log("Telefon:", number.value);
    console.log("Xabar:", message.value);

    if (
        name.value.length >= 5 &&
        email.value.length >= 10 &&
        number.value.length === 13 &&
        message.value.length >= 20
    ) {
        alert("Successful");
    } else {
        alert("Error: Ma'lumotlar to'liq emas yoki xato");
    }
});