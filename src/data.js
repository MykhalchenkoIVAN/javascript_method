const data = [
    {
        titleBlock: "Number()",
        properties: [
            {
                name: ".POSITIVE_INFINITY",
                class: "number",
                description: `.POSITIVE_INFINITY - це спеціальне число, яке означає "нескінченність" у JavaScript.
                 Це значення використовується, коли потрібно визначити, що деяке число є дуже великим або бескінечним.`,
                code: `
 // Приклад використання .POSITIVE_INFINITY для визначення найбільшого значення в масиві
const numbers = [5, 10, 15, 20, 25];
let max = Number.NEGATIVE_INFINITY;
for (const number of numbers) {
    if (number > max) {
        max = number;
    }
}
console.log(max); // 25
                
// Приклад використання .POSITIVE_INFINITY при обчисленні математичної формули
const a = 5;
const b = 10;
const result = a / (a - b);
if (result === Number.POSITIVE_INFINITY) {
  console.log("Результат не може бути вирахований");
} else {
  console.log(result);
}


`
            },
            {
                name: ".NEGATIVE_INFINITY",
                class: "number",
                description: `.NEGATIVE_INFINITY це спеціальне значення в JavaScript, яке представляє від'ємну нескінченність. 
                Воно використовується для представлення значення, яке менше за будь-яке інше можливе число.`,
                code: `
//Приклад 1:
if (x > 0) {
    x = Number.NEGATIVE_INFINITY;
  } 

//Приклад 2:
function minValue(arr) {
    let min = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
                
                `


            },
            {
                name: ".MAX_VALUE",
                class: "number",
                description: ".MAX_VALUE це спеціальне значення в JavaScript, яке представляє максимальне значення числа, яке може бути вираховане в JavaScript.",
                code: `
//Приклад 1:
if (x > Number.MAX_VALUE) {
    x = Number.MAX_VALUE;
  }  

//Приклад 2:
function maxValue(arr) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  } 
         `
            },
            {
                name: ".MIN_VALUE",
                class: "number",
                description: ".MIN_VALUE це спеціальне значення в JavaScript, яке представляє найменше значення числа, яке може бути вираховане в JavaScript.",
                code: `
//Приклад 1:
if (x < Number.MIN_VALUE) {
    x = Number.MIN_VALUE;
  }

//Приклад 2:
function minValue(arr) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
        `
            },
            {
                name: ".EPSILON",
                class: "number",
                description: ".EPSILON це спеціальне значення в JavaScript, яке представляє мінімальну крокову величину, відмінну від нуля, яку може вирахувати JavaScript. Це значення може використовуватися для перевірки на рівність двох дробових чисел.",
                code: `
// Приклад 1:
function areEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
  }

//Приклад 2:
function withinEpsilon(a, b, epsilon = Number.EPSILON) {
    return Math.abs(a - b) < epsilon;
  }
  
                `
            },
            {
                name: ".NaN",
                class: "nan",
                description: `.NaN є спеціальним значенням в JavaScript, яке означає "не число". Це значення використовується, коли операція не може бути виконана і в результаті видається значення, яке не є числом.`,
                code: `
//Приклад 1:
let result = Math.sqrt(-1);
console.log(result); // NaN

//Приклад 2:
let str = "not a number";
let result = parseInt(str);
console.log(result); // NaN

                `
            },
        ],
        methods: {
            basicMethods: [
                {
                    name: ".toExponential()",
                    class: "string",
                    description: "Метод .toExponential() в JavaScript використовується для перетворення числового значення в формат експоненціального представлення.",
                    code: `
// Приклад 1:
let num = 123456789;
let result = num.toExponential();
console.log(result); // "1.23456789e+8"

// Приклад 2:
let num = 0.0000123;
let result = num.toExponential(2);
console.log(result); // "1.23e-5"

`
                },
                {
                    name: ".toFixed()",
                    class: "string",
                    description: "Метод .toFixed() в JavaScript використовується для обробки числового значення та отримання результату як рядка з заданою кількістю знаків після коми.",
                    notice: "fixed-point notation",
                    code: `
//Приклад 1:
let num = 123.456;
let result = num.toFixed(1);
console.log(result); // "123.5"

//Приклад 2:
let num = 123.456789;
let result = num.toFixed(4);
console.log(result); // "123.4568"

                    `

                },
                {
                    name: ".toPrecision()",
                    class: "string",
                    description: "toPrecision() - це метод JavaScript, який використовується для форматування дійсного числа в рядок, який містить задану кількість цифр після десяткової коми.",
                    notice: "change precision",
                    code: `
//Приклади використання:
let num = 123456.789;
let precision = 4;
let result = num.toPrecision(precision);
console.log(result); // "123456.8"


let num = 0.0000000123;
let precision = 2;
let result = num.toPrecision(precision);
console.log(result); // "1.2e-8"

                    `
                },
                {
                    name: ".isFinite()",
                    class: "boolean",
                    description: `isFinite() є функцією в JavaScript, яка перевіряє, чи є значення конечним числом. Вона повертає true, якщо значення є конечним числом, тобто не є бескінечністю або NaN.`,
                    notice: "",
                    code: `
// Два приклади використання:

console.log(isFinite(123)); // true
console.log(isFinite(1/0)); // false

                    `
                },
                {
                    name: ".isInteger()",
                    class: "boolean",
                    description: `.isInteger() - це метод JavaScript, який перевіряє, чи є задане значення цілим числом. Він повертає значення true у випадку, коли задане значення є цілим числом, інакше повертає значення false.`,
                    notice: "",
                    code: `
// Приклади використання:

// Перевірка числа на цілість:
console.log(Number.isInteger(4)); // true
console.log(Number.isInteger(4.5)); // false

// Використання в умовному операторі:
let num = 5.5;
if (!Number.isInteger(num)) {
  console.log(" num  is not an integer"); // 5.5 is not an integer
}
                    `
                },
                {
                    name: ".isNaN()",
                    class: "boolean",
                    description: `isNaN() - це функція JavaScript, яка перевіряє, чи являється вхідне значення "Not-a-Number" (NaN). Функція повертає true, якщо значення є NaN, і false в іншому випадку.`,
                    notice: "",
                    code: `
// Визначення неправильного типу даних в виразі:
let x = "abc";
if (isNaN(x)) {
  console.log("Not a number");
} else {
  console.log("Is a number");
}

// Визначення NaN в результаті арифметичної операції:
let y = Math.sqrt(-1);
if (isNaN(y)) {
  console.log("Result is NaN");
} else {
  console.log("Result is a number");
}

                    `
                },
                {
                    name: ".parseInt()",
                    class: "number",
                    description: ".parseInt() - це функція JavaScript, яка перетворює рядок в ціле число.",
                    notice: "",
                    code: `
// Приклади використання:

// Перетворення рядка з відповідною цілою величиною:
let numberString = "23";
let number = parseInt(numberString);
console.log(number); // 23

// Використання функції із системою счислення:
let binary = "1010";
let decimal = parseInt(binary, 2);
console.log(decimal); // 10

                    `
                },
                {
                    name: ".parseFloat()",
                    class: "number",
                    description: "parseFloat() - це встановлений метод JavaScript, який перетворює рядок (або інший тип даних) в дійсне число типу float.",
                    notice: "",
                    code: `
//Приклади використання:

//Перетворення рядку в дійсне число:
let num = "3.14159265";
let floatNum = parseFloat(num);
console.log(floatNum); // 3.14159265

// Використання з відфільтровуванням недопустимих значень:
let string = "not a number";
let floatNum = parseFloat(string);
if (!isNaN(floatNum)) {
   console.log(floatNum);
} else {
   console.log("Invalid input");
}
// Output: Invalid input
                    `
                },
            ], data1: {
                data1title: "",
                data2: [],
            },
            data2: {
                data1title: "",
                data3: []
            }, data3: {
                data1title: "",
                data4: [],
            },
            data4: {
                data1title: "",
                data5: [],
            },
        }
    },
    {
        titleBlock: "String()",
        properties: [
            {
                name: ".length",
                class: "string",
                notice: "довжина рядка",
                description: '"string.length" є спеціальною властивістю рядків в JavaScript, яка повертає довжину рядка.',
                code: `
// Приклади:

// Визначити довжину рядка:
let str = "Hello, World!";
let length = str.length;
console.log(length);  // 13

// Перевірити чи рядок містить відповідну кількість символів:
let password = "password123";
if (password.length >= 8) {
  console.log("Password is strong enough.");
} else {
  console.log("Password is too short.");
}


                `
            },
        ],
        methods: {
            basicMethods: [
                {
                    name: ".charAt(index)",
                    class: "string",
                    notice: "",
                    description: '.charAt(index) - це метод, який повертає символ, розташований на вказаній позиції (index) в рядку.',
                    code: `
// Приклади використання:
let str = 'Hello, world!';
console.log(str.charAt(0)); // 'H'

let name = 'John';
console.log(name.charAt(3)); // 'n'

                    `
                },
                {
                    name: ".charCodeAt(index)",
                    class: "string",
                    notice: "",
                    description: '"charCodeAt" - це метод рядків (string) у JavaScript, який повертає Unicode-кодову позицію символу в рядку за вказаним індексом.',
                    code: `
// Приклади використання:

// Визначення коду символу "H" в рядку "Hello, World!":
let str = "Hello, World!";
let charCode = str.charCodeAt(0);
console.log(charCode);

// Перетворення рядку в масив кодів символів:
let str = "Hello, World!";
let charCodes = [];
for (let i = 0; i < str.length; i++) {
  charCodes.push(str.charCodeAt(i));
}
console.log(charCodes);

                    `
                },
                {
                    name: ".codePointAt(index)",
                    class: "string",
                    notice: "",
                    description: '.codePointAt(index) - це метод JavaScript, який повертає цілочисельне значення UTF-16 для символа в рядку на вказаному індексі.',
                    code: `
// Приклади використання:
const message = 'Hello, World!';
console.log(message.codePointAt(0)); // 72

const emoji = '🌟';
console.log(emoji.codePointAt(0)); // 127775


                    `
                },
                {
                    name: ".fromCharCode(n1, n2...)",
                    class: "string",
                    notice: "",
                    description: '.fromCharCode(n1, n2, ...) - це статичний метод JavaScript, який повертає рядок, створений з відповідних символів UTF-16, відображаних цілочисельними кодами.',
                    code: `
// Приклади використання:
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

const starCode = 127775;
console.log(String.fromCharCode(starCode)); // "🌟"

                    `
                },
                {
                    name: ".fromCodePoint(n1, n2...)",
                    class: "string",
                    notice: "",
                    description: '.fromCodePoint(n1, n2, ...) - це статичний метод JavaScript, який повертає рядок, створений з відповідних символів Unicode, відображаних цілочисельними кодами.',
                    code: `
// Приклади використання:
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // "Hello"

const starCode = 0x1F31F;
console.log(String.fromCodePoint(starCode)); // "🌟"

                    `
                },
                {
                    name: ".concat(str1, str2...)",
                    class: "string",
                    notice: "",
                    description: '.concat(str1, str2, ...) - це метод JavaScript, який додає один або більше рядків до кінця поточного рядка і повертає новий рядок.',
                    code: `
// Приклади використання:
const message = 'Hello';
console.log(message.concat(',', ' World!')); // "Hello, World!"

const firstName = 'John';
const lastName = 'Doe';
console.log(firstName.concat(' ', lastName)); // "John Doe"

                    `
                },
                {
                    name: ".startsWith(str, size) ",
                    class: "boolean",
                    notice: "",
                    description: '.startsWith(str, size) - це метод JavaScript, який визначає, чи починається поточний рядок з вказаного підрядка. Параметр size визначає початок порівняння в поточному рядку.',
                    code: `
// Приклади використання:
const message = 'Hello World';
console.log(message.startsWith('Hello')); // true

const fileName = 'image.png';
console.log(fileName.startsWith('.png', fileName.length - 4)); // true

                    `
                },
                {
                    name: ".endsWith(str, size)",
                    class: "boolean",
                    notice: "",
                    description: '.endsWith(str, size) - це метод JavaScript, який визначає, чи закінчується поточний рядок вказаним підрядком. Параметр size визначає кінець порівняння в поточному рядку.',
                    code: `
// Приклади використання:
const message = 'Hello World';
console.log(message.endsWith('World')); // true

const fileName = 'image.png';
console.log(fileName.endsWith('.png')); // true

                    `
                },
                {
                    name: ".includes(str, from)",
                    class: "boolean",
                    notice: "",
                    description: '.includes() - це метод строк в JavaScript, який використовується для визначення чи строка містить якусь відому підстроку. Метод приймає два аргументи: строку, яку ми шукаємо (str), та початок пошуку (from), якщо він вказаний.',
                    code: `
// Приклади використання:
const str1 = "Hello World";
console.log(str1.includes("Hello")); // true
console.log(str1.includes("Hi")); // false

const str2 = "Welcome to the jungle";
console.log(str2.includes("to", 10)); // true

                    `
                },
                {
                    name: ".indexOf(str, from)",
                    class: "number",
                    notice: "",
                    description: '.indexOf() - це метод строк в JavaScript, який використовується для визначення індексу першого входження відомої підстроки в строку. Метод приймає два аргументи: строку, яку ми шукаємо (str), та початок пошуку (from), якщо він вказаний. Якщо підстрока не знайдена, метод поверне -1.',
                    code: `
// Приклади використання:
const str1 = "Hello World";
console.log(str1.indexOf("Hello")); // 0
console.log(str1.indexOf("Hi")); // -1

const str2 = "Welcome to the jungle";
console.log(str2.indexOf("to", 10)); // 13

                    `
                },
                {
                    name: ".lastIndexOf(str, from)",
                    class: "number",
                    notice: "",
                    description: '.lastIndexOf() - це метод строк в JavaScript, який використовується для визначення індексу останнього входження відомої підстроки в строку. Метод приймає два аргументи: строку, яку ми шукаємо (str), та початок пошуку (from), якщо він вказаний. Якщо підстрока не знайдена, метод поверне -1.',
                    code: `
// Приклади використання:
const str1 = "Hello World";
console.log(str1.lastIndexOf("l")); // 9
console.log(str1.lastIndexOf("z")); // -1

const str2 = "Welcome to the jungle";
console.log(str2.lastIndexOf("o", 15)); // 7

                    `
                },
                {
                    name: ".search(regex)",
                    class: "string",
                    notice: "",
                    description: '.search() - це метод строк в JavaScript, який використовується для пошуку відповідності регулярного виразу в строкі. Метод приймає один аргумент: регулярний вираз (regex), який ми шукаємо. Якщо відповідність знайдена, метод повертає індекс першої відповідності. Якщо відповідність не знайдена, метод повертає -1.',
                    code: `
// Приклади використання:
const str1 = "Hello World";
console.log(str1.search(/l/i)); // 2
console.log(str1.search(/z/i)); // -1

const str2 = "1234567890";
console.log(str2.search(/\d{3}/)); // 0
console.log(str2.search(/\d{11}/)); // -1

                    `
                },
                {
                    name: ".localeCompare(str, locale, options)",
                    class: "string",
                    notice: "",
                    description: '.localeCompare() - це метод строк в JavaScript, який використовується для порівняння двох строк в залежності від вказаного локального налаштування. Метод приймає три аргументи: строку для порівняння (str), локальне налаштування (locale), яке може бути вказане як рядок, та опції (options), які можуть визначати спосіб сортування. Метод повертає значення 0, якщо строки рівні, -1 якщо перша строка менша за другу, та 1 якщо перша строка більша за другу.',
                    code: `
// Приклади використання:
const str1 = "a";
const str2 = "b";
console.log(str1.localeCompare(str2)); // -1
console.log(str2.localeCompare(str1)); // 1
console.log(str1.localeCompare(str1)); // 0

const str3 = "ä";
const str4 = "z";
console.log(str3.localeCompare(str4, "de")); // -1
console.log(str4.localeCompare(str3, "de")); // 1

                    `
                },
                {
                    name: ".match(regex)",
                    class: "string",
                    notice: "",
                    description: '.match(regex) - це метод JavaScript, який використовується для пошуку відповідностей межу в даному рядку тексту. Він повертає масив зі всіма відповідностями, які знайдені в рядку.',
                    code: `
// Приклади:

// Пошук всіх чисел в рядку:
let str = "Це рядок з числами 123 и 456";
let regex = /\d+/g;
let matches = str.match(regex);
console.log(matches); // ["123", "456"]

// Пошук всіх слів, що починаються з великої літери:
let str = "Це рядок з великими літерами в словах";
let regex = /\b[A-Z][a-z]+\b/g;
let matches = str.match(regex);
console.log(matches); // ["Це", "Великими", "Літерами", "Словах"]

                    `
                },
                {
                    name: ".matchAll(regex)",
                    class: "string",
                    notice: "",
                    description: 'String.prototype.matchAll(regex) - це метод JavaScript, який використовується для знаходження всіх відповідностей для регулярного виразу в рядку. Він повертає генератор з відповідностей.',
                    code: `
// Приклади використання:
let string = "Hello World";
let regex = /\w+/g;
let matches = [...string.matchAll(regex)];
console.log(matches);
// Output: [Array(2), Array(2), Array(2), Array(2), Array(2)]


let string = "I love JavaScript";
let regex = /\b(\w+)\b/g;
let matches = [...string.matchAll(regex)];
console.log(matches);
// Output: [Array(2), Array(2), Array(2), Array(2)]

                    `
                },
                {
                    name: ".normalize(form)",
                    class: "string",
                    notice: "",
                    description: `.normalize(form) - Це метод JavaScript, який нормалізує рядок Unicode в визначену форму нормалізації.
                    form - Обов'язковий параметр, який визначає форму нормалізації. Може бути "NFC", "NFD", "NFKC" або "NFKD".`,
                    code: `
// Приклади використання:

// Нормалізація рядка для універсальної компараторної операції:
let str = "ćafé";
console.log(str.normalize("NFC")); // "ćafé"

// Використання для порівняння рядків:
let str1 = "re\u0301sume\u0301";
let str2 = "résumé";
console.log(str1.normalize("NFC") === str2); // true

                    `
                },
                {
                    name: ".padEnd(len, pad)",
                    class: "string",
                    notice: "",
                    description: '.padEnd(len, pad) - це метод JavaScript, який додає символи до кінця рядка, доки його довжина не буде рівна вказаній довжині. Якщо рядок вже має вказану довжину, він не змінюється.',
                    code: `
// Приклади використання:

// Додати пробіли до кінця рядка, щоб довжина стала 10 символів:
let str = 'hello';
str = str.padEnd(10, ' ');
console.log(str);  // "hello     "

// Додати символи "#" до кінця рядка, щоб довжина стала 15 символів:
let str = 'javascript';
str = str.padEnd(15, '#');
console.log(str);  // "javascript#####"

                    `
                },
                {
                    name: ".padStart(len, pad)",
                    class: "string",
                    notice: "",
                    description: '.padStart(len, pad) - це метод JavaScript, який додає додатковий рядок (pad) до початку рядка, доки довжина рядка не стане рівною len.',
                    code: `
// Приклади використання:

// Додати нулі до початку числа:
let num = 123; 
let padded = num.toString().padStart(5, '0'); 
console.log(padded); // "00123"

// Додати пробіли до початку імені:
let name = "John"; 
let padded = name.padStart(10, ' '); 
console.log(padded); // "     John"

                    `
                },
                {
                    name: ".repeat(n)",
                    class: "string",
                    notice: "",
                    description: '.repeat(n) - Метод повторює рядок n разів.',
                    code: `
// Приклади:

// Створення повторюваної пробільної стрічки:
let space = ' '.repeat(5);
console.log(space); // "     "

// Виведення повторюваної написаної фрази:
let message = 'Hello!'.repeat(3);
console.log(message); // "Hello!Hello!Hello!"

                    `
                },
                {
                    name: ".replace(str|regex, newstr|func)",
                    class: "string",
                    notice: "",
                    description: '"replace()" є методом строк в JavaScript, який використовується для заміни тексту в строці. Ви можете використовувати строку або регулярний вираз в якості аргументу "str|regex", а заміну можете встановити в якості строки або функції.',
                    code: `
// Приклади:

// Замінити всі входження слова "javascript" на слово "JS"
let str = "I love javascript";
str = str.replace("javascript", "JS");
console.log(str);  // "I love JS"

// Замінити всі входження цифр в строці на відповідні букви
let str = "There are 5 dogs";
str = str.replace(/\d/g, function(match) {
  switch (match) {
    case '0': return 'zero';
    case '1': return 'one';
    case '2': return 'two';
    case '3': return 'three';
    case '4': return 'four';
    case '5': return 'five';
    case '6': return 'six';
    case '7': return 'seven';
    case '8': return 'eight';
    case '9': return 'nine';
  }
});
console.log(str);  // "There are five dogs"


                    `
                },
                {
                    name: ".slice(ini, end)",
                    class: "string",
                    notice: "",
                    description: '.slice(ini, end) є методом JavaScript, який використовується для вирізання частини рядка від позиції "ini" до позиції "end". Якщо позиція "end" не вказана, то метод відрізає рядок від позиції "ini" до кінця рядка.',
                    code: `
// Приклади використання:

// Вирізати першу половину рядка:
const str = "Hello World!";
const result = str.slice(0, 5);
console.log(result); // Output: "Hello"

// Вирізати останній символ рядка:
const str = "Hello World!";
const result = str.slice(-1);
console.log(result); // Output: "!"

                    `
                },
                {
                    name: ".substr(ini, len)",
                    class: "string",
                    notice: "",
                    description: '.substr(ini, len) - це метод рядку JavaScript, який вирізає підрядок з початкової позиції "ini" довжиною "len".',
                    code: `
// Приклад використання:

const str = "Hello World";
const substr = str.substr(0, 5);
console.log(substr); // Output: "Hello"


const str = "Javascript";
const substr = str.substr(3, 8);
console.log(substr); // Output: "ascript"

                    `
                },
                {
                    name: ".substring(ini, end)",
                    class: "string",
                    notice: "",
                    description: '.substring(ini, end) - це метод строки в JavaScript, який використовується для вибірки частини строки заданого діапазону.',
                    code: `
// Приклад 1:
let str = 'Hello World';
let result = str.substring(0, 5);
console.log(result); // "Hello"

// Приклад 2:
let str = 'Hello World';
let result = str.substring(7);
console.log(result); // "World"


                    `
                },
                {
                    name: ".split(sep|regex, limit)",
                    class: "string",
                    notice: "",
                    description: `.split() - це метод рядка JavaScript, який дозволяє розділяти рядок на масив строк, використовуючи роздільник або регулярний вираз.

                    Параметри:
                    
                        sep|regex - рядок або регулярний вираз, який використовується як роздільник
                        limit - обмеження кількості результуючих частин`,
                    code: `
// Приклади використання:

// Розділити рядок на масив слів, використовуючи пробіл як роздільник:
const sentence = "Hello world"; 
const words = sentence.split(" "); 
console.log(words); // [ "Hello", "world" ]

// Розділити рядок на масив чисел, використовуючи кому як роздільник:
const numbers = "1,2,3,4,5"; 
const numArray = numbers.split(","); 
console.log(numArray); // [ "1", "2", "3", "4", "5" ]

                    `
                },
                {
                    name: ".toLowerCase()",
                    class: "string",
                    notice: "",
                    description: '.toLowerCase() - це метод строки, який повертає копію строки з всіма буквами в нижньому регістрі.',
                    code: `
// Приклади використання:

let greeting = "HELLO WORLD";
let lowerCaseGreeting = greeting.toLowerCase();
console.log(lowerCaseGreeting);
Виведе: hello world

let userInput = "MiXeD CaSe InpUt";
let processedInput = userInput.toLowerCase();
console.log(processedInput);
Виведе: mixed case input
                    `
                },
                {
                    name: ".toUpperCase()",
                    class: "string",
                    notice: "",
                    description: '.toUpperCase() - це метод JavaScript для рядків, який конвертує всі літери рядка в верхній регістр.',
                    code: `
// Приклади використання:

// Конвертування рядка в верхній регістр:
let name = "john doe";
let upperCaseName = name.toUpperCase();
console.log(upperCaseName); // "JOHN DOE"


// Перевірка регістру літер у рядку:
let password = "secret";
let input = "SECRET";

if (input.toUpperCase() === password.toUpperCase()) {
    console.log("Password is correct.");
} else {
    console.log("Password is incorrect.");
}

                    `
                },
                {
                    name: ".trim()",
                    class: "string",
                    notice: "",
                    description: 'trim() - це метод, який видаляє початкові та кінцеві пропуски в рядку.',
                    code: `
// Приклади використання:

// Перед перевіркою валідності введеного користувачем значення:
let userInput = "  some text with spaces  ";
userInput = userInput.trim();

// Перед порівнянням рядків, видаляючи всі пропуски на початку та в кінці рядка:
let firstString = "  first string with spaces  ";
let secondString = "second string with spaces";
if (firstString.trim() === secondString.trim()) {
  console.log("Strings are equal");
}

                    `
                },
                {
                    name: ".trimEnd()",
                    class: "string",
                    notice: "",
                    description: 'trimEnd() - це метод рядків в JavaScript, який видаляє всі пробільні символи з кінця рядка.',
                    code: `
// Приклади використання:
let str = "   Hello World!   ";
console.log(str.trimEnd());
// Output: "   Hello World!"


let str = "JavaScript   ";
console.log(str.trimEnd());
// Output: "JavaScript"

                    `
                },
                {
                    name: ".trimStart()",
                    class: "string",
                    notice: "",
                    description: '.trimStart() це метод строки в JavaScript, який видаляє пробіли в початку строки.',
                    code: `
// Приклади використання:
let str = "   Hello World!";
console.log(str.trimStart()); // Output: "Hello World!"


let str = "\t\t\t Welcome to the world of JavaScript";
console.log(str.trimStart()); // Output: "Welcome to the world of JavaScript"

                    `
                },
                {
                    name: ".raw``",
                    class: "string",
                    notice: "",
                    description: '.raw - це шаблонний літерал в JavaScript, який відображає зовнішній вигляд шаблонної строки без виконання власної втілення і заміни перемінних.',
                    code: ``
                },
            ], data1: {
                data1title: "",
                data2: [],
            },
            data2: {
                data1title: "",
                data3: [],
            }, data3: {
                data1title: "",
                data4: [],
            },
            data4: {
                data1title: "",
                data5: [],
            },
        }


    },
    {
        titleBlock: "Array()",
        properties: [
            {
                name: ".length",
                class: "number",
                notice: "кількість елементів"
            },
        ],
        methods: {
            basicMethods: [
                {
                    name: ".isArray(obj)",
                    class: "boolean",
                    notice: ""
                },
                {
                    name: ".includes(obj, from)",
                    class: "boolean",
                    notice: ""
                },
                {
                    name: ".indexOf(obj, from)",
                    class: "number",
                    notice: ""
                },
                {
                    name: ".lastIndexOf(obj, from)",
                    class: "number",
                    notice: ""
                },
                {
                    name: ".join(sep)",
                    class: "string",
                    notice: ""
                },
                {
                    name: ".slice(ini, end)",
                    class: "array",
                    notice: ""
                },
                {
                    name: ".concat(obj1, obj2...)",
                    class: "array",
                    notice: ""
                },
                {
                    name: ".flat(depth)",
                    class: "array",
                    notice: ""
                }
            ], data1: {
                data1title: "MODIFY SOURCE ARRAY METHODS",
                data2: [

                    {
                        name: "copyWithin(pos, ini, end)",
                        class: "array",
                        notice: ""
                    },
                    {
                        name: ".fill(obj, ini, end)",
                        class: "array",
                        notice: ""
                    },
                    {
                        name: ".reverse()",
                        class: "array",
                        notice: ""
                    },
                    {
                        name: ".sort(cf(a,b))",
                        class: "array",
                        notice: ""
                    },
                    {
                        name: ".splice(ini, del, o1, o2...)",
                        class: "array",
                        notice: ""
                    }
                ],
            }, data2: {
                data1title: "ITERATION METHODS",
                data3: [

                    {
                        name: ".entries()",
                        class: "array",
                        notice: ""
                    },
                    {
                        name: ".keys()",
                        class: "array",
                        notice: ""
                    },
                    {
                        name: ".values()",
                        class: "array",
                        notice: ""
                    }
                ],
            }, data3: {
                data1title: "CALLBACK FOR EACH METHODS",
                data4: [

                    {
                        name: ".every(cb(e,i,a), arg)",
                        class: "boolean",
                        notice: "test until false",
                    },
                    {
                        name: ".some(cb(e,i,a), arg",
                        class: "boolean",
                        notice: "test until true",
                    },
                    {
                        name: ".map(cb(e,i,a), arg)",
                        class: "array",
                        notice: "make array",
                    },
                    {
                        name: ".filter(cb(e,i,a), arg)",
                        class: "array",
                        notice: "make array w/true",
                    },
                    {
                        name: ".find(cb(e,i,a), arg)",
                        class: "object",
                        notice: "return elem w/true",
                    },
                    {
                        name: ".findIndex(cb(e,i,a), arg)",
                        class: "number",
                        notice: "return index",
                    },
                    {
                        name: ".flatMap(cb(e,i,a), arg)",
                        class: "array",
                        notice: "map + flat(1)",
                    },
                    {
                        name: ".forEach(cb(e,i,a), arg)",
                        class: "undefined",
                        notice: "exec for each",
                    },
                    {
                        name: ".reduce(cb(p,e,i,a), arg)",
                        class: "object",
                        notice: "accumulative",
                    },
                    {
                        name: ".reduceRight(cb(p,e,i,a), arg)",
                        class: "object",
                        notice: "from end",
                    },


                ],
            },
            data4: {
                data1title: "ADD/REMOVE METHODS",
                data5: [

                    {
                        name: ".pop()",
                        class: "object",
                        notice: "remove & return last element"
                    },
                    {
                        name: ".push(o1, o2...)",
                        class: "number",
                        notice: "dd elem & return length"
                    },
                    {
                        name: ".shift() ",
                        class: "object",
                        notice: "remove & return first element"
                    },
                    {
                        name: ".unshift(o1, o2...)",
                        class: "number",
                        notice: "dd elem & return len"
                    },

                ],
            },

        },
    },
    {
        titleBlock: "JSON",
        properties: [],
        methods: {
            basicMethods: [
                {
                    name: ".parse()",
                    class: "object",
                    notice: "arse string to object"
                },
                {
                    name: ".stringify(obj, repf|wl, sp) ",
                    class: "object",
                    notice: "convert to str"
                },
            ],
            data1: {
                data1title: "",
                data2: [],
            },
            data2: {
                data1title: "",
                data3: [],
            },
            data3: {
                data1title: "",
                data4: [],
            },
            data4: {
                data1title: "",
                data5: [],
            },
        }
    }, {
        titleBlock: "Promise()",
        properties: [],
        methods: {
            basicMethods: [
                {
                    name: ".all(obj)",
                    class: "promise",
                    notice: "return promise"
                },
                {
                    name: ".catch() ",
                    class: "promise",
                    notice: "= .then(undef,s)"
                },
                {
                    name: ".finally()",
                    class: "promise",
                    notice: "exec callback always"
                },
                {
                    name: ".then(onFulfilled(v), onRejected(s))",
                    class: "promise",
                    notice: ""
                },
                {
                    name: ".race(obj) ",
                    class: "promise",
                    notice: "eturn greedy promise (res/rej)"
                },
                {
                    name: ".resolve(obj)",
                    class: "promise",
                    notice: "return resolved promise"
                },
                {
                    name: ".reject(reason)",
                    class: "promise",
                    notice: "return rejected promise"
                },
                {
                    name: ".allSettled(obj)",
                    class: "promise",
                    notice: "return all fullfill/reject"
                },
            ],
            data1: {
                data1title: "",
                data2: [],
            },
            data2: {
                data1title: "",
                data3: [],
            },
            data3: {
                data1title: "",
                data4: [],
            },
            data4: {
                data1title: "",
                data5: [],
            },
        }
    }
];


export default data;