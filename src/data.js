const data = [
    // Number
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


`,
                type: "Number()"
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
                
                `,
                type: "Number()"


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
         `,
                type: "Number()"
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
        `,
                type: "Number()"
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
  
                `,
                type: "Number()"
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

                `,
                type: "Number()"
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

`,
                    type: "Number()"
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

                    `,
                    type: "Number()"

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

                    `,
                    type: "Number()"
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

                    `,
                    type: "Number()"
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
                    `,
                    type: "Number()"
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

                    `,
                    type: "Number()"
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

                    `,
                    type: "Number()"
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
                    `,
                    type: "Number()"
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
    // String
    {
        titleBlock: "String()",
        properties: [
            {
                name: ".length",
                class: "number",
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


                `,
                type: "String()"
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

                    `,
                    type: "String()"
                },
                {
                    name: ".charCodeAt(index)",
                    class: "number",
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

                    `,
                    type: "String()"
                },
                {
                    name: ".codePointAt(index)",
                    class: "number",
                    notice: "",
                    description: '.codePointAt(index) - це метод JavaScript, який повертає цілочисельне значення UTF-16 для символа в рядку на вказаному індексі.',
                    code: `
// Приклади використання:
const message = 'Hello, World!';
console.log(message.codePointAt(0)); // 72

const emoji = '🌟';
console.log(emoji.codePointAt(0)); // 127775


                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
                },
                {
                    name: ".search(regex)",
                    class: "number",
                    notice: "",
                    description: '.search() - це метод строк в JavaScript, який використовується для пошуку відповідності регулярного виразу в строкі. Метод приймає один аргумент: регулярний вираз (regex), який ми шукаємо. Якщо відповідність знайдена, метод повертає індекс першої відповідності. Якщо відповідність не знайдена, метод повертає -1.',
                    code: `
// Приклади використання:
const str1 = "Hello World";
console.log(str1.search(/l/i)); // 2
console.log(str1.search(/z/i)); // -1

const str2 = "1234567890";
console.log(str2.search(/\ d{3}/)); // 0
console.log(str2.search(/\ d{11}/)); // -1

                    `,
                    type: "String()"
                },
                {
                    name: ".localeCompare(str, locale, options)",
                    class: "number",
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

                    `,
                    type: "String()"
                },
                {
                    name: ".match(regex)",
                    class: "array",
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

                    `,
                    type: "String()"
                },
                {
                    name: ".matchAll(regex)",
                    class: "array",
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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


                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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


                    `,
                    type: "String()"
                },
                {
                    name: ".split(sep|regex, limit)",
                    class: "array",
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

                    `,
                    type: "String()"
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
                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
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

                    `,
                    type: "String()"
                },
                {
                    name: ".raw``",
                    class: "string",
                    notice: "",
                    description: '.raw - це шаблонний літерал в JavaScript, який відображає зовнішній вигляд шаблонної строки без виконання власної втілення і заміни перемінних.',
                    code: ``,
                    type: "String()"
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
    // Array
    {
        titleBlock: "Array()",
        properties: [
            {
                name: ".length",
                class: "number",
                notice: "кількість елементів",
                description: "Array.length - це властивітсь массиву, яка відображає кількість елементів в массиві. Це може використовуватися для визначення довжини массиву.",
                code: `
// Приклади використання:

// Визначення довжини массиву:
let fruits = ['apple', 'banana', 'mango'];
console.log(fruits.length); // 3

// Використання в циклі для перебору всіх елементів массиву:
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
                `,
                type: "Array()"
            },
        ],
        methods: {
            basicMethods: [
                {
                    name: ".isArray()",
                    class: "boolean",
                    notice: "",
                    description: ".isArray() - це метод JavaScript, який використовується для визначення, чи є обєкт масивом. Він повертає значення true, якщо об'єкт є масивом, і false, якщо він не є масивом.",
                    code: `
// Приклади використання: 

// Визначення, чи є обєкт масивом:
let fruits = ['apple', 'banana', 'cherry'];
console.log(Array.isArray(fruits)); // true

let notArray = 'apple';
console.log(Array.isArray(notArray)); // false

// Використання в умовному операторі:
let value = 'apple';

if (Array.isArray(value)) {
  console.log('value is an array');
} else {
  console.log('value is not an array');
}

                    `,
                    type: "Array()"
                },
                {
                    name: ".includes()",
                    class: "boolean",
                    notice: "",
                    description: "Array.includes() - це метод JavaScript, який використовується для перевірки чи міститься елемент у масиві. Він повертає значення true або false в залежності від того, чи міститься елемент у масиві або ні",
                    code: `
// Приклад 1:
let arr = [1, 2, 3, 4];

console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false

// Приклад 2:
let arr = ['apple', 'banana', 'cherry'];

console.log(arr.includes('apple')); // true
console.log(arr.includes('pear')); // false

                    
                    `,
                    type: "Array()"
                },
                {
                    name: ".indexOf()",
                    class: "number",
                    notice: "",
                    description: ".indexOf() - це метод JavaScript, який використовується для пошуку індексу першого входження заданого елементу в масиві. Якщо елемент не знайдено, то метод поверне -1.",
                    code: `
// Приклади використання:

// Визначення індексу певного елементу в масиві:
let fruits = ['apple', 'banana', 'mango'];
let index = fruits.indexOf('banana');
console.log(index); // 1

// Використання для перевірки наявності елементу в масиві:
let fruits = ['apple', 'banana', 'mango'];
let exists = fruits.indexOf('orange') !== -1;
console.log(exists); // false

                    `,
                    type: "Array()"
                },
                {
                    name: ".lastIndexOf()",
                    class: "number",
                    notice: "",
                    description: ".lastIndexOf() є методом масиву JavaScript, який використовується для пошуку індексу останнього входження вказаного значення в масив. Якщо значення не знайдено, метод поверне -1.",
                    code: `
// Приклади використання:

// Пошук останнього індексу входження вказаного значення:
const array = [2, 5, 9, 2];
const lastIndex = array.lastIndexOf(2);
console.log(lastIndex); // 3

// Визначення існування значення в масиві:
const array = [2, 5, 9, 2];
const isValueExists = array.lastIndexOf(7) !== -1;
console.log(isValueExists); // false

                    `,
                    type: "Array()"
                },
                {
                    name: ".join(sep)",
                    class: "string",
                    notice: "",
                    description: ".join() - це метод масиву в JavaScript, який дозволяє трансформувати масив в рядок використовуючи вказаний роздільник.",
                    code: `
// Приклади використання:

// Перетворення масиву на рядок розділених комами:
const colors = ['red', 'green', 'blue'];
console.log(colors.join(', '));
// Output: 'red, green, blue'

// Об'єднання елементів масиву в один рядок:
const elements = ['Hydrogen', 'Helium', 'Lithium'];
const result = elements.join('');
console.log(result);
// Output: 'HydrogenHeliumLithium'

                    `,
                    type: "Array()"
                },
                {
                    name: ".slice()",
                    class: "array",
                    notice: "",
                    description: ".slice() - це метод масиву в JavaScript, який використовується для отримання нового масиву з підмасиву від відповідного початку до кінця (за замовчуванням до кінця масиву).",
                    code: `
//  Приклади:

// 1:
let fruits = ['apple', 'banana', 'kiwi', 'mango'];
let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: [ 'banana', 'kiwi' ]

// 2:
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(3);

console.log(slicedNumbers); // Output: [ 4, 5 ]

                    `,
                    type: "Array()"
                },
                {
                    name: ".concat()",
                    class: "array",
                    notice: "",
                    description: ".concat() є методом масиву в JavaScript, який дозволяє об'єднати два або більше масивів в один. Результуючий масив стає сумою всіх вхідних масивів, але первинні масиви не змінюються.",
                    code: `
// Приклади використання:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);
console.log(result);  // [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let result = arr1.concat(arr2, arr3);
console.log(result);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]


                    `,
                    type: "Array()"
                },
                {
                    name: ".flat()",
                    class: "array",
                    notice: "",
                    description: ".flat() - це метод JavaScript, який додає всі вкладені масиви в один плоский масив.",
                    code: `
// Приклад 1:
let arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); 
// output: [1, 2, 3, 4, 5, 6]

// Приклад 2:
let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]]];
console.log(arr.flat(2)); 
// output: [1, 2, 3, 4, 5, 6, 7, 8]


                    `,
                    type: "Array()"
                }
            ], data1: {
                data1title: "MODIFY SOURCE ARRAY METHODS",
                data2: [

                    {
                        name: ".copyWithin()",
                        class: "array",
                        notice: "",
                        description: ".copyWithin() - це метод масиву JavaScript, який копіює елементи всередину масиву від одного індексу до іншого індексу.",
                        code: `
//Приклади:

// Копіювання елементів від початку до кінця масиву:
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 2);
console.log(arr);  // [3, 4, 5, 4, 5]

// Копіювання елементів від кінця до початку масиву:
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4);
console.log(arr);  // [4, 2, 3, 4, 5]

                        `,
                        type: "Array()"
                    },
                    {
                        name: ".fill()",
                        class: "array",
                        notice: "",
                        description: "fill() це метод масиву, який заповнює всі елементи масиву заданим значенням. Воно може бути використане для ініціалізації масиву заданим значенням або для видалення існуючих значень.",
                        code: `
// Приклади використання:

// Ініціалізація масиву заданим значенням:
let array = new Array(5).fill(0);
console.log(array); // [0, 0, 0, 0, 0]

// Заміна елементів масиву заданим значенням:
let array = [1, 2, 3, 4, 5];
array.fill('x', 2, 4);
console.log(array); // [1, 2, 'x', 'x', 5]

                        `,
                        type: "Array()"
                    },
                    {
                        name: ".reverse()",
                        class: "array",
                        notice: "",
                        description: "reverse() - це метод для масивів, який змінює порядок елементів у масиві на протилежний.",
                        code: `
// Приклади:

// Реверсування масиву чисел: 
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

// Реверсування масиву рядків: 
let words = ['one', 'two', 'three'];
words.reverse();
console.log(words); // ['three', 'two', 'one']

                        `,
                        type: "Array()"
                    },
                    {
                        name: ".sort()",
                        class: "array",
                        notice: "",
                        description: "sort() є методом масивів в JavaScript, який сортує елементи масиву в порядку зростання. Метод змінює порядок елементів у вихідному масиві.",
                        code: `
// Приклади використання:

// Сортування масиву чисел:
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort();
console.log(numbers); 
// Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Сортування масиву рядків:
let words = ['apple', 'banana', 'cherry', 'date'];
words.sort();
console.log(words); 
// Output: ['apple', 'banana', 'cherry', 'date']

                        `,
                        type: "Array()"
                    },
                    {
                        name: ".splice()",
                        class: "array",
                        notice: "",
                        description: ".splice() - це метод в JavaScript, який використовується для вставлення або видалення елементів з масиву.",
                        code: `
// Приклади використання:

// Вставлення елементів:
let fruits = ['banana', 'apple', 'mango'];
fruits.splice(1, 0, 'kiwi', 'grapes');
console.log(fruits);
// Output: ['banana', 'kiwi', 'grapes', 'apple', 'mango']

// Видалення елементів:
let fruits = ['banana', 'apple', 'mango', 'kiwi', 'grapes'];
fruits.splice(1, 2);
console.log(fruits);
// Output: ['banana', 'kiwi', 'grapes']

                        `,
                        type: "Array()"
                    }
                ],
            }, data2: {
                data1title: "ITERATION METHODS",
                data3: [

                    {
                        name: ".entries()",
                        class: "array",
                        notice: "",
                        description: `.entries() - це метод JavaScript, який використовується для створення об'єкту Array Iterator, який включає в себе пари ключ-значення для кожного елемента в масиві.`,
                        code: `
// Приклад використання:
let fruits = ['apple', 'banana', 'cherry'];
let fruitEntries = fruits.entries();

console.log(fruitEntries.next().value);
// expected output: [0, "apple"]

console.log(fruitEntries.next().value);
// expected output: [1, "banana"]


let array1 = ['a', 'b', 'c'];
let iterator1 = array1.entries();

for (let e of iterator1) {
  console.log(e);
}
// expected output:
// [0, 'a']
// [1, 'b']
// [2, 'c']

                        `,
                        type: "Array()"
                    },
                    {
                        name: ".keys()",
                        class: "array",
                        notice: "",
                        type: "Array()",
                        description: `Array.keys() - це метод JavaScript, який повертає новий об'єкт Array Iterator, який містить ключі для кожного елементу в масиві.`,
                        code: `
// Приклад 1:
let масив = [3, 5, 7];
let ключі = масив.keys();
for (let ключ of ключі) {
  console.log(ключ);
}
// Виводить: 0 1 2

// Приклад 2:
let масив = ['Андрей', 'Богдан', 'Віталій'];
let ключі = масив.keys();
for (let ключ of ключі) {
  console.log(ключ, масив[ключ]);
}
// Виводить: 
// 0 'Андрей'
// 1 'Богдан'
// 2 'Віталій'

                        `,
                    },
                    {
                        name: ".values()",
                        class: "array",
                        notice: "",
                        type: "Array()",
                        description: '.values() - це метод JavaScript, який використовується для отримання всіх значень масиву.',
                        code: `
// Приклади використання:

// Виведення всіх значень масиву:
let array = [1, 2, 3, 4, 5];
let values = array.values();

for (let value of values) {
    console.log(value);
}

// Використання в комбінації з Array.forEach() для виведення всіх значень масиву:
let array = [6, 7, 8, 9, 10];
let values = array.values();

values.forEach(function(value) {
    console.log(value);
});

                        `,
                    }
                ],
            }, data3: {
                data1title: "CALLBACK FOR EACH METHODS",
                data4: [

                    {
                        name: ".every()",
                        class: "boolean",
                        notice: "test until false",
                        type: "Array()",
                        description: 'Array.every() - це метод масиву, який використовується для перевірки всіх елементів масиву на відповідність умові. Метод повертає true, якщо всі елементи відповідають умові, і false, якщо хоча б один елемент не відповідає.',
                        code: `
//Приклад 1: Перевірка чи всі елементи масиву є додатніми числами
const arr = [1, 2, 3, 4, 5];
const allPositive = arr.every(function(value) {
  return value >= 0;
});
console.log(allPositive);
// Output: true

// Приклад 2: Перевірка чи всі елементи масиву є строками
const arr = ['apple', 'banana', 'cherry'];
const allStrings = arr.every(function(value) {
  return typeof value === 'string';
});
console.log(allStrings);
// Output: true


                        `,
                    },
                    {
                        name: ".some()",
                        class: "boolean",
                        notice: "test until true",
                        type: "Array()",
                        description: '"Array.some()" - це метод масиву JavaScript, який використовується для перевірки, чи є хоча б один елемент масиву відповідає заданим критеріям.',
                        code: `
// Приклад 1: "Перевірити, чи є хоча б один елемент масиву більшим за 10"
const arr = [1, 2, 3, 4, 11];
const someLarge = arr.some(function(element) {
  return element > 10;
});
console.log(someLarge); // true

// Приклад 2: "Перевірити, чи є хоча б один строковий елемент масиву довжиною більше 5 символів"
const arr = ['dog', 'cat', 'elephant'];
const someLong = arr.some(function(element) {
  return element.length > 5;
});
console.log(someLong); // true

                        `,
                    },
                    {
                        name: ".map()",
                        class: "array",
                        notice: "make array",
                        type: "Array()",
                        description: 'Array.map() - це метод масиву, який викликає певну функцію для кожного елементу масиву та повертає новий масив з результатами виклику. Це дозволяє застосовувати деяку логіку до кожного елементу масиву.',
                        code: `
// Приклад 1: Збільшення значень елементів масиву на одиницю
const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map(number => number + 1);
console.log(incrementedNumbers); // [2, 3, 4, 5, 6]
              `,
                    },
                    {
                        name: ".filter()",
                        class: "array",
                        notice: "make array w/true",
                        type: "Array()",
                        description: 'Array.filter() - це метод масиву у JavaScript, який використовується для відфільтрування елементів масиву на основі виконання деякого умовного виразу. Він повертає новий масив, який містить тільки елементи, які пройшли умову.',
                        code: `
// Приклади:

// Заголовок: Відфільтрувати елементи масиву, які дорівнюють заданому числу
let numbers = [1, 2, 3, 4, 5, 6];
let filtered = numbers.filter(function (num) {
  return num === 3;
});
console.log(filtered); // [3]

// Заголовок: Відфільтрувати елементи масиву, які менше заданого числа
let numbers = [1, 2, 3, 4, 5, 6];
let filtered = numbers.filter(function (num) {
  return num < 3;
});
console.log(filtered); // [1, 2]

                        `,
                    },
                    {
                        name: ".find()",
                        class: "object",
                        notice: "return elem w/true",
                        type: "Array()",
                        description: 'Array.find() є методом масиву в JavaScript, який шукає перший елемент в масиві, який відповідає заданому критерію і повертає його. Якщо жоден елемент не відповіє критерію, метод повертає undefined.',
                        code: `
// Приклад 1: Знайти перший елемент масиву, який дорівнює 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const first5 = numbers.find(function(element) {
  return element === 5;
});
console.log(first5); // 5

// Приклад 2: Знайти перший об'єкт в масиві, який має свойство name зі значенням "John"
const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 35 }
  ];
  const firstJohn = users.find(function(user) {
    return user.name === "John";
  });
  console.log(firstJohn); // { name: "John", age: 25 }
  
`,
                    },
                    {
                        name: ".findIndex()",
                        class: "number",
                        notice: "return index",
                        type: "Array()",
                        description: 'Array.findIndex() - це метод масиву JavaScript, який шукає в масиві елемент, який відповідає умові переданій в callback функцію і повертає індекс першого знайденого відповідного елемента.',
                        code: `
//Приклад 1: Знаходження індексу першого елементу, значення якого перевищує 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const firstIndex = numbers.findIndex(num => num > 5);
console.log(firstIndex); // 5

// Приклад 2: Знаходження індексу елементу за його значенням
const characters = [{name: 'Naruto', age: 16}, {name: 'Sasuke', age: 17}, {name: 'Sakura', age: 16}];
const sakuraIndex = characters.findIndex(char => char.name === 'Sakura');
console.log(sakuraIndex); // 2

                        `,
                    },
                    {
                        name: ".flatMap()",
                        class: "array",
                        notice: "map + flat()",
                        type: "Array()",
                        description: 'Array.flatMap() - це метод JavaScript, який використовується для відображення кожного елемента масиву, а потім планує відображений масив в один рядок.',
                        code: `
// Приклад 1: "Відображення масиву з властивостями об'єкту"
const arr = [{name: 'John', hobby: ['reading', 'traveling']}, 
            {name: 'Jane', hobby: ['cooking', 'dancing']}];

const hobbies = arr.flatMap(obj => obj.hobby);
console.log(hobbies); 
// Output: ["reading", "traveling", "cooking", "dancing"]

// Приклад 2: "Розпакування вложених масивів"
const arr = [[1, 2], [3, 4], [5, 6]];
const flattenArr = arr.flatMap(x => x);
console.log(flattenArr); 
// Output: [1, 2, 3, 4, 5, 6]

                        `,
                    },
                    {
                        name: ".forEach()",
                        class: "undefined",
                        notice: "exec for each",
                        type: "Array()",
                        description: 'Array.forEach() є методом в javascript, який викликає функцію обробника для кожного елемента масиву. Цей метод не повертає значення, він лише виконує дію для кожного елемента.',
                        code: `
 // Приклади використання:

// Заголовок: Виведення всіх елементів масиву на екран
const numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
  console.log(num);
});

// Output:
// 1
// 2
// 3
// 4

// Заголовок: Розширення масиву і додавання в нього нових елементів
const numbers = [1, 2, 3, 4];
const doubledNumbers = [];

numbers.forEach(function(num) {
  doubledNumbers.push(num * 2);
});

console.log(doubledNumbers);

// Output:
// [2, 4, 6, 8]

                        `,
                    },
                    {
                        name: ".reduce()",
                        class: "object",
                        notice: "accumulative",
                        type: "Array()",
                        description: 'Array.reduce() є методом в javascript, який викликає функцію обробника для кожного елемента масиву. Цей метод не повертає значення, він лише виконує дію для кожного елемента.',
                        code: `
const array = [1, 2, 3, 4];

// Приклад 1: Рахує суму всіх елементів масиву
const sum = array.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10

// "Рахує суму всіх елементів масиву"
// acc - поточний акумулятор, cur - поточний елемент масиву

// Приклад 2: Знаходить максимальний елемент в масиві
const max = array.reduce((acc, cur) => acc > cur ? acc : cur);
console.log(max); // 4

// "Знаходить максимальний елемент в масиві"
//  acc - поточний максимальний елемент, cur - поточний елемент масиву

                        `,
                    },
                    {
                        name: ".reduceRight()",
                        class: "object",
                        notice: "from end",
                        type: "Array()",
                        description: '"Array.reduceRight()" в JavaScript є методом масиву, який приймає функцію обробника та використовує її для виконання деякої дії для кожного елемента масиву, починаючи з останнього елемента та до першого. Цей метод повертає одне значення, яке залежить від викликаної функції обробника.',
                        code: `
// Приклад 1: "Сумування всіх елементів масиву"
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduceRight((acc, curr) => acc + curr);
console.log(sum); // 15

// Приклад 2: "Об'єднання всіх елементів масиву у рядок"
let words = ['я', 'розумію', 'це'];
let sentence = words.reduceRight((acc, curr) => curr + ' ' + acc);
console.log(sentence); // "це розумію я"

                        `,
                    },


                ],
            },
            data4: {
                data1title: "ADD/REMOVE METHODS",
                data5: [

                    {
                        name: ".pop()",
                        class: "object",
                        notice: "",
                        type: "Array()",
                        description: '"Array.pop()" - це метод масиву в JavaScript, який видаляє останній елемент масиву та повертає його значення.',
                        code: `
// Видалення останнього елементу масиву
const animals = ['dog', 'cat', 'rabbit', 'parrot'];

const lastAnimal = animals.pop();
console.log(animals); // [ 'dog', 'cat', 'rabbit' ]
console.log(lastAnimal); // 'parrot'

// Використання у циклі
const numbers = [1, 2, 3, 4, 5];

while (numbers.length > 0) {
    console.log(numbers.pop());
    // 5
    // 4
    // 3
    // 2
    // 1
}

                        `,
                    },
                    {
                        name: ".push()",
                        class: "number",
                        notice: "",
                        type: "Array()",
                        description: 'Array.push() є методом в javascript, який додає один або кілька елементів в кінець масиву.',
                        code: `
// Приклад 1: Додати один елемент в кінець масиву
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');
console.log(fruits); // виведе: ['Apple', 'Banana', 'Cherry']

// Приклад 2: Додати кілька елементів в кінець масиву
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry', 'Durian');
console.log(fruits); // виведе: ['Apple', 'Banana', 'Cherry', 'Durian']

                        `,
                    },
                    {
                        name: ".shift()",
                        class: "object",
                        notice: "",
                        type: "Array()",
                        description: 'Array.shift() є методом в javascript, який видаляє перший елемент масиву та повертає його значення.',
                        code: `
// Приклад 1: Видалення першого елемента масиву
var fruits = ['apple', 'banana', 'cherry'];
var firstFruit = fruits.shift();
console.log(fruits); // ['banana', 'cherry']
console.log(firstFruit); // 'apple'

//Приклад 2: Використання shift() для видалення елементів з масиву доки він не стане пустим
var numbers = [1, 2, 3, 4, 5];
while (numbers.length > 0) {
  console.log(numbers.shift());
}
// Output: 1 2 3 4 5

                        `,
                    },
                    {
                        name: ".unshift()",
                        class: "number",
                        notice: "",
                        type: "Array()",
                        description: 'Array.unshift() - це метод в JavaScript, який додає елементи на початок масиву та повертає нову довжину масиву.',
                        code: `
// Приклад 1: "Додавання елементів в початок масиву"
let fruits = ['banana', 'apple'];
console.log(fruits.unshift('pear', 'mango'));
console.log(fruits); 
// Output: 4
// ['pear', 'mango', 'banana', 'apple']

// Приклад 2: "Додавання одного елемента в початок масиву"
let numbers = [2, 3, 4, 5];
console.log(numbers.unshift(1));
console.log(numbers); 
// Output: 5
// [1, 2, 3, 4, 5]
                        `,
                    },

                ],
            },

        },
    },
    // JSON
    {
        titleBlock: "JSON",
        properties: [],
        methods: {
            basicMethods: [
                {
                    name: ".parse()",
                    class: "object",
                    notice: "",
                    description: ".parse() - це метод JavaScript, який використовується для перетворення рядкового представлення JSON на об'єкт JavaScript.",
                    code: `
//  Приклад 1 
let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // "John"

// Приклад 2
let str = '[1, 2, 3, 4, 5]';
let numbers = JSON.parse(str);
console.log(numbers[0]); // 1

                    `,
                    type: "JSON"
                },
                {
                    name: ".stringify() ",
                    class: "object",
                    notice: "",
                    description: "JSON.stringify() - це метод JavaScript, який конвертує JavaScript-об'єкт або масив в рядок JSON (JavaScript Object Notation).",
                    code: `
// Приклади використання:

// Конвертація об'єкту в рядок JSON:
const object = {name: 'John', age: 30};
const json = JSON.stringify(object);
console.log(json); // '{"name":"John","age":30}'

// Конвертація масиву в рядок JSON:

const array = [1, 2, 3];
const json = JSON.stringify(array);
console.log(json); // '[1,2,3]'

                    `,
                    type: "JSON"
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
    },
    // Promise
    {
        titleBlock: "Promise()",
        properties: [],
        methods: {
            basicMethods: [
                {
                    name: ".all(obj)",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
                },
                {
                    name: ".catch() ",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
                },
                {
                    name: ".finally()",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
                },
                {
                    name: ".then(onFulfilled(v), onRejected(s))",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
                },
                {
                    name: ".race(obj) ",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
                },
                {
                    name: ".resolve(obj)",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
                },
                {
                    name: ".reject(reason)",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
                },
                {
                    name: ".allSettled(obj)",
                    class: "promise",
                    notice: "",
                    type: "Promise()"
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
    },
    // Error
    {
        titleBlock: "Error()",
        properties: [
            {
                name: ".name",
                class: "string",
                description: `Error.name - це властивість в JavaScript, яка повертає ім'я типу помилки. Це строкове значення, яке показує, який тип помилки виник.`,
                code: `
// Приклад використання:
try {
    throw new Error('This is a custom error');
  } catch (error) {
    console.log(error.name); // "Error"
  }

// Інший приклад:
const customError = new TypeError('Invalid data type');

console.log(customError.name); // "TypeError"

                `,
                type: "Error()"
            }, {
                name: ".message",
                class: "string",
                description: `Error.message - це властивість в JavaScript, яка повертає повідомлення про помилку. Це строкове значення, яке містить деталі про помилку.`,
                code: `
// Приклад використання:
try {
    throw new Error('This is a custom error');
  } catch (error) {
    console.log(error.message); // "This is a custom error"
  }

// Інший приклад: 
const customError = new TypeError('Invalid data type');

console.log(customError.message); // "Invalid data type"

`,
                type: "Error()"
            }
        ],
        methods: {
            basicMethods: [],
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
    },
    // Symbol()
    {
        titleBlock: "Symbol",
        properties: [
            {
                name: ".iterator",
                class: "array",
                description: `Symbol.iterator - це спеціальний символ в JavaScript, який визначає функцію ітератора для об'єкту. Функція ітератора повертає об'єкт, який можна використовувати для перебору елементів об'єкту.`,
                code: `
// Приклад використання:
const numbers = [1, 2, 3, 4];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2

// Інший приклад:
const data = {
    name: 'John Doe',
    age: 30,
    [Symbol.iterator]: function() {
      const properties = Object.keys(this);
      let count = 0;
      return {
        next: function() {
          if (count < properties.length) {
            return {
              value: [properties[count], this[properties[count++]]],
              done: false
            };
          } else {
            return { done: true };
          }
        }.bind(this)
      };
    }
  };
  
  const iterator = data[Symbol.iterator]();
  
  console.log(iterator.next().value); // ["name", "John Doe"]
  console.log(iterator.next().value); // ["age", 30]
  
`,
                type: "Symbol"
            }, {
                name: ".match",
                class: "string",
                description: `Symbol.match - це спеціальний символ в JavaScript, який визначає метод для строки, який використовується при використанні регулярних виразів.`,
                code: `
// Приклад використання:
const text = 'Hello World';
const regex = /Hello/;

regex[Symbol.match] = function() {
  return 'Goodbye';
};

console.log(text.match(regex)); // Goodbye

// Інший приклад:
const data = {
    name: 'John Doe',
    age: 30,
    [Symbol.match]: function(value) {
      return value === this.name;
    }
  };
  
  console.log('John Doe'.match(data)); // John Doe
  console.log('Jane Doe'.match(data)); // null
  

                `,
                type: "Symbol"
            }, {
                name: ".species",
                class: "string",
                description: `Symbol.species - це спеціальний символ в JavaScript, який визначає конструктор, який використовується при створенні нащадків поточного об'єкта.`,
                code: `
// Приклад використання:
class MyArray extends Array {
    static get [Symbol.species]() {
      return Array;
    }
  }
  
  const myArray = new MyArray(1, 2, 3);
  const myArrayClone = myArray.map(x => x);
  
  console.log(myArrayClone instanceof MyArray); // false
  console.log(myArrayClone instanceof Array); // true

// Інший приклад:
class MyPromise extends Promise {
    static get [Symbol.species]() {
      return Promise;
    }
  }
  
  const myPromise = new MyPromise((resolve, reject) => {
    resolve(123);
  });
  
  const myPromiseClone = myPromise.then(x => x);
  
  console.log(myPromiseClone instanceof MyPromise); // false
  console.log(myPromiseClone instanceof Promise); // true
  
                `,
                type: "Symbol"
            }
        ],
        methods: {
            basicMethods: [
                {
                    name: ".for(key)",
                    class: "string",
                    description: `Symbol.for(key) - це статичний метод символу, який створює глобальний символ з вказаним ключем. Якщо символ з таким ключем вже існує, то він буде повернений, якщо немає, то він буде створений.`,
                    code: `

let sym1 = Symbol.for("key");
let sym2 = Symbol.for("key");
console.log(sym1 === sym2); // true
                    `,
                    type: "Symbol"
                },
                {
                    name: ".keyFor(sym) ",
                    class: "string",
                    description: `Symbol.keyFor(sym) є методом, який повертає ключ, відповідний до символу sym, який було створено за допомогою Symbol.for(key).`,
                    code: `
// Приклад 1:
const sym = Symbol.for("example");
console.log(Symbol.keyFor(sym)); // "example"

// Приклад 2:
const sym = Symbol("example");
console.log(Symbol.keyFor(sym)); // undefined

`,
                    type: "Symbol"
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
    },
    // events
    {
        titleBlock: "window",
        properties: [],
        methods: {
            basicMethods: [
                {
                    name: ".alert(str)",
                    class: "undefined",
                    description: `.alert() - це метод в JavaScript, який призначений для створення вспливаючого вікна (alert box) в браузері. Він приймає рядок тексту як параметр, який відображається в вікні попередження.`,
                    code: `
// Приклад використання:
alert("Hello, World!");

// Це відобразить вспливаюче вікно з повідомленням "Hello, World!".

// Ще один приклад:
var name = prompt("What is your name?");
alert("Hello, " + name + "!");

// Це відобразить вспливаюче вікно з запитанням "What is your name?" 
// і відображає вітання вспливаючому вікні в залежності від введеного в поле вводу користувачем значення.

`,
                    type: "window"
                }, {
                    name: ".prompt(str, def)",
                    class: "string",
                    description: `.prompt(str, def) - це метод JavaScript, який відображає вікно введення з повідомленням str та заповнює його значенням за замовчуванням def. Користувач може ввести своє значення та натиснути "OK", щоб повернути його.`,
                    code: `
// Приклади використання:

// Запитати ім'я користувача:
var userName = prompt("Введіть своє ім'я:", "Анонімний");
console.log("Вітаю, " + userName);

// Запитати вік користувача:
var userAge = prompt("Введіть свій вік:", "0");
console.log("Ваш вік: " + userAge);


                    `,
                    type: "window"
                }, {
                    name: ".confirm(str)",
                    class: "boolean",
                    description: `.confirm(str) - це метод JavaScript, який відображає діалогове вікно з підтвердженням. Він приймає один аргумент str, який є рядком повідомлення, яке буде відображене в діалоговому вікні. Метод повертає true, якщо користувач натиснув кнопку "OK", в іншому випадку він повертає false.`,
                    code: `
// Приклади використання:
// Приклад 1:
let result = confirm("Ви впевнені, що хочете видалити файл?");
if (result) {
  console.log("Файл видалено");
} else {
  console.log("Видалення файлу скасовано");
}

//  Приклад 2:
let age = prompt("Введіть ваш вік");
if (age >= 18) {
  console.log("Ви можете відвідувати сайт");
} else {
  console.log("Вам недоступний цей сайт");
}
`,
                    type: "window"
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
    },
    // Map()
    {
        titleBlock: "Map()",
        properties: [
            {
                name: ".size",
                class: "number",
                description: `Map.size є властивістю об'єкту Map, яка відображає кількість елементів у Map.`,
                code: `
// Приклад використання:
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.size); // 2


const map = new Map([['name', 'John'], ['age', 30]]);
console.log(map.size); // 2

`,
                type: "Map()",
            }
        ],
        methods: {
            basicMethods: [
                {
                    name: ".set(key, value)",
                    class: "map",
                    description: `Map.set - це метод, який використовується для додавання або оновлення пари ключ-значення в об'єкті Map.`,
                    code: `
// Приклад використання:
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map);
// Map { 'name' => 'John', 'age' => 30 }
                
// Ще один приклад:
let map = new Map();
map.set('name', 'Jane');
map.set('age', 25);
map.set('name', 'John');
 console.log(map);
// Map { 'name' => 'John', 'age' => 25 }
                
// У першому прикладі ми додали дві пари ключ-значення, а у другому - ми оновили значення ключа 'name'.
                `,
                    type: "Map()",
                }, {
                    name: ".get(key)",
                    class: "object",
                    description: `.get(key) - це метод Map в JavaScript, який дозволяє отримати значення відповідно до певного ключа.`,
                    code: `
// Приклад використання:
const map1 = new Map();
map1.set("name", "John");
map1.set("age", 30);
                
console.log(map1.get("name")); // John
console.log(map1.get("age")); // 30
                
// Інший приклад використання:
const map2 = new Map([
["name", "Jane"],
["age", 25]
]);
                
console.log(map2.get("name")); // Jane
console.log(map2.get("age")); // 25
                
                    `,
                    type: "Map()",
                }, {
                    name: ".has(key)",
                    class: "boolean",
                    description: `.has(key) - це метод Map об'єкту в JavaScript, який перевіряє, чи існує відповідний ключ у колекції. Він повертає логічне значення true або false в залежності від того, чи існує ключ в колекції.`,
                    code: `
// Приклади використання:
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
                
// Перевіряємо, чи існує ключ 'name'
console.log(map.has('name')); // true
                
// Перевіряємо, чи існує ключ 'job'
console.log(map.has('job')); // false
                
                
let map = new Map();
map.set('name', 'Jane');
map.set('age', 25);
                
let keys = Array.from(map.keys());
                
// Перевіряємо, чи існує ключ 'name' в масиві ключів
console.log(keys.includes('name')); // true
                
// Перевіряємо, чи існує ключ 'job' в масиві ключів
console.log(keys.includes('job')); // false
                
                
                `,
                    type: "Map()",
                }, {
                    name: ".delete(key)",
                    class: "boolean",
                    description: `Map.delete(key) - метод видаляє елемент з Map, що відповідає вказаному ключу.`,
                    code: `
// Приклад 1
let myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.delete('age');
console.log(myMap); // Map { 'name' => 'John' }
                    
// Приклад 2
let myMap = new Map([['name', 'John'], ['age', 30]]);
myMap.delete('age');
console.log(myMap); // Map { 'name' => 'John' }
                    
                `,
                    type: "Map()",
                }, {
                    name: ".clear()",
                    class: "map",
                    description: `.clear() - це метод, який видаляє всі елементи з карти (Map) у JavaScript.`,
                    code: `
// Приклад 1:
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.size); // 2
                
 map.clear();
console.log(map.size); // 0
                
// Приклад 2:
let map = new Map();
map.set('name', 'Jane');
map.set('age', 25);
                
if (map.has('name')) {
map.clear();
}
console.log(map.size); // 0
                
                
                `,
                    type: "Map()",
                },
            ],
            data1: {
                data1title: "ITERATION METHODS",
                data2: [
                    {
                        name: ".entries()",
                        class: "map",
                        description: `Map.entries() - це метод JavaScript, який повертає масив всіх ключ-значення пар в об'єкті Map.`,
                        code: `
// Приклад використання:
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

const entries = map.entries();
console.log(entries); // [['name', 'John'], ['age', 30]]

`,
                        type: "Map()",
                    }, {
                        name: ".keys()",
                        class: "map",
                        description: `.keys() - це метод в JavaScript, який використовується для повернення всіх ключів у відображення (Map). Це відображення має метод .keys(), який повертає об'єкт, який містить всі ключі у відображенні.`,
                        code: `
// Приклади:
// 1:
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("job", "developer");

let keys = myMap.keys();
console.log(keys);
// Output: MapIterator {"name", "age", "job"}

// 2:
let myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["job", "developer"]
  ]);
  
  let keys = myMap.keys();
  for (let key of keys) {
    console.log(key);
  }
  // Output:
  // "name"
  // "age"
  // "job"
  
`,
                        type: "Map()",
                    }, {
                        name: ".values()",
                        class: "map",
                        description: `.values() - це метод об'єкту Map, який повертає колекцію значень всіх елементів у відомому об'єкті Map.`,
                        code: `
// Приклад 1:
let map = new Map();
map.set('name', 'John');
map.set('age', 30);

let values = map.values();
for (let value of values) {
  console.log(value);
}
// Output: John, 30

// Приклад 2:
let map = new Map();
map.set('product1', 'iPhone');
map.set('product2', 'Macbook');

let values = Array.from(map.values());
console.log(values);
// Output: [iPhone, Macbook]

                        `,
                        type: "Map()",
                    },],
            },
            data2: {
                data1title: "CALLBACK FOR EACH METHODS",
                data3: [

                    {
                        name: ".forEach()",
                        class: "undefined",
                        description: `.forEach() - це метод класу Map, який викликає функцію для кожного елемента в колекції.`,
                        code: `
// Опис використання:
map.forEach(function(value, key, map) {
    // code to be executed
  });


// value - значення поточного елемента в колекції.
// key - ключ поточного елемента в колекції.
// map - сама колекція Map.

// Приклади використання:
// Виведення всіх значень в консоль:
let map = new Map();
map.set('name', 'John');
map.set('age', 30);

map.forEach(function(value, key) {
  console.log(key + ': ' + value);
});

// Output:
// name: John
// age: 30

// Знаходження суми всіх значень:
let map = new Map();
map.set('apples', 10);
map.set('bananas', 5);
map.set('oranges', 8);

let sum = 0;

map.forEach(function(value) {
  sum += value;
});

console.log('Total fruits: ' + sum);

// Output:
// Total fruits: 23


                        `,
                        type: "Map()",
                    },

                ],
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