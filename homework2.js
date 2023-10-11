'use strict';
/*// Вхідні дані (змінні)
var unit = "км"; // одиниця виміру: кілометри, години або кілограми
var value = 10; // кількість
var result = "";

switch (unit) {
  case "км":
    result = value + " км це " + value * 1000 + " м.";
    break;
  case "год":
    result = value + " год це " + value * 60 + " хв.";
    break;
  case "кг":
    result = value + " кг це " + value * 1000 + " г.";
    break;
  default:
    result = "Невідома одиниця виміру";
    break;
}
// Вивід результату
console.log(result);*/
//Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".
// Отримуємо рік від користувача
var year = prompt("Введіть кількість років:");

// Перевірка, чи введене значення є числом та не є від'ємним
if (!isNaN(year) && year >= 0) {
  var word;

  if (year === "0") {
    word = "років";
  } else if (year === "1") {
    word = "рік";
  } else if (year >= 2 && year <= 4) {
    word = "роки";
  } else if (year >= 5) {
    word = "років";
  }

  console.log(year + " " + word);
} else {
  console.log("Введіть додатне число.");
}




