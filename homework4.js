//1.Написати свою реалізацію функції isNaN.
function IsNaN(value) {
  return value !== value;
}
console.log(IsNaN(NaN)); // true
console.log(IsNaN(4));  // false

//2.Необхідно написати власну реалізацію функцій padEnd та 
//padStart, але у вас повинна бути одна функція pad
//(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:
//рядок, до якого буде додаватися символ.
//символ, який буде додаватися.
//Скільки додавати символів
//булеве значення, яке вказує, куди додавати символ. 
//Якщо true, то до початку, якщо false, то в кінець.
//Останній аргумент повинен працювати як і в оригінальній 
//функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
function pad(str, symbol, long, addToStart) {
  if (addToStart) {
    return str.padStart(long, symbol);
  } else {
    return str.padEnd(long, symbol);
  }
}
// Приклад використання
console.log(pad('qwerty', '+', 7, true)); // "+qwerty"
console.log(pad('qwerty', '-', 7, false)); // "qwerty-"

//3.Перевірка теорії ймовірності. Напишіть функцію яка 
//буде генерувати певну кількість випадкових чисел в 
//діапазоні від 100 до 1000 включно. Порахувати кількість 
//парних та непарних серед них. Обчислити відсоткове 
//співвідношення - чи буде воно близьке до 50%50? 
//Приклад функції checkProbabilityTheory(count). 
//Парметр count буде вказувати скільки разів буде 
//генеруватися випадкове число.
function checkProbabilityTheory(count) {
  // Визначаємо діапазон чисел
    let minValue = 100;
    let maxValue = 1000;
    // Загальна кількість чисел
    let totalValue = count;
    // Змінні для підрахунку кількості парних та непарних чисел
    let evenNumbers = 0;
    let oddNumbers = 0;
     // Генерація та підрахунок парних і непарних чисел
         for (let i = 0; i < totalValue; i++) {
        const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        if (randomNum % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
// Обчислення відсоткового співвідношення
    let evenPercentage = (evenNumbers / totalValue) * 100;
    let oddPercentage = (oddNumbers / totalValue) * 100;
// Виведення результатів
    console.log("Кількість згенерованих чисел:", totalValue);
    console.log("Парних чисел:", evenNumbers);
    console.log("Не парних чисел:", oddNumbers);
    console.log("Відсоток парних до не парних:", evenPercentage + "%" + ":" + oddPercentage + "%");
}

// Приклад виклику функції для генерації 900 чисел
checkProbabilityTheory(900);

