'use strict';
// Вхідні дані (змінні)
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
console.log(result);


