use strict';
//1.Вам необхідно намалювати в консолі прямокутний 
//трикутник із зірочок (або плюсиків, або якогось іншого 
//символу): на першому рядку - одна зірочка, на другій і, 
//і так далі. Рішення оформіть у вигляді функції, 
//куди передаються два параметри: висота трикутника та 
//символ, яким його потрібно "малювати".
/*1.function drawTriangle(height, symbol) {
  for (var i = 1; i <= height; i++) {
    var row = '*';
    for (var j = 1; j <= i; j++) {
      row += symbol;
    }
    console.log(row);
  }
}

drawTriangle(5, '*');

2.function drawTriangle(height, symbol) {
  var row = '*';
  for (var i = 1; i <= height; i++) {
    row += symbol;
    console.log(row);
  }
};

drawTriangle(5, '*');*/
//2.Вивести на екран суму чисел від 1 до 100 включно, 
//які не кратні 3.
/*var sum = 0;

for (var i = 1; i <= 100; i++) {
  if (i % 3 !== 0) {
    sum += i;
  }
};
console.log("Сума чисел від 1 до 100, що не кратні 3: " + sum);*/
//3.Написати функцію pow(x,y) яка буде приймати 2 цисла, 
//перше це число яке ми будемо зводити у ступінь, друге у 
//яку ступінь.
/*function pow(x, y) {
  var result = 1;
  for (var i = 1; i < y; i++) {
    result *= x;
  }
  return result;
};
 console.log(pow(5, 2));*/
