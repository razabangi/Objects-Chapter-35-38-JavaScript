// Start of Chapter no 35 to 38

// Answer no 1:
// function showDate() {
//     let date = new Date();
//     document.write(`${date}`);
// }
// showDate();

// Answer no 2:
// function showFullName(firstName, lastName){
//     let fullName = `${firstName} ${lastName}`;
//     document.write(`Your full name is: ${fullName}`);
// }
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// showFullName(firstName, lastName);

// Answer no 3:
// function addSum(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let num1 = +prompt("Add a number");
// let num2 = +prompt("Add a number");
// document.write(`Your given number's sum is: ${addSum(num1, num2)}`);

// Answer no 4:
// function calc(num1, num2, opr) {
//     switch (opr) {
//         case '+':
//             return num1 + num2;
//             break;
//         case '-':
//             return num1 - num2;
//             break;
//         case '*':
//             return num1 * num2;
//             break;
//         case '/':
//             return num1 / num2;
//             break;
//         case '%':
//             return num1 % num2;
//             break;
//         default:
//             return num1 + num2
//             break;
//     }
// }

// let num1 = +prompt("Add a number one");
// let num2 = +prompt("Add a number two");
// let opr  =  prompt("Add a operator");
// document.write(`Value after calculate: ${calc(num1, num2, opr)}`);

// Answer no 5:
// function square(num) {
//     return num * num;
// }
// let num = +prompt("Enter a number");
// document.write(`Value after square: ${square(num)}`);

// Answer no 6:
// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// let num = +prompt("Enter a number");
// document.write(`Value after factorial: ${factorial(num)}`);

// Answer no 7:
// function counting(numStart, numEnd) {
//     let count = '';
//     for (let i = numStart; i <= numEnd; i++) {
//         count += `${i}<br>`;
//     }
//     return count;
// }
// let numStart = +prompt("Enter starting point");
// let numEnd = +prompt("Enter ending point");
// document.write(`${counting(numStart, numEnd)}`);

// Answer no 8:
// function calculateSquare(num) {
//     return num * num;
// }

// function calculateHypotenuse(base, perpendicular) {
//     let hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//     hypotenuse = calculateSquare(hypotenuse);
//     return hypotenuse;
// }

// let base = +prompt("Enter base");
// let perpendicular = +prompt("Enter perpendicular");
// document.write(`Formula:<br> Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpendicular<sup>2</sup><br>`);
// document.write(`${calculateHypotenuse(base, perpendicular)}`);

// Answer no 9:
// function areaOfrectangle(width, height) {
//     let A = width * height;
//     return A;
// }

// let width = +prompt("Enter a width");
// let height = +prompt("Enter a height");
// document.write(`Area of rectangle is: ${areaOfrectangle(width, height)}`);

// Answer no 10:
// function checkPalindrome(str) {
//     let len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         console.log(i);
//         console.log(str);
//         if (str[i] !== str[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// let string = prompt('Enter a string: ');
// document.write(`${checkPalindrome(string)}`);

// Answer no 11:
// function capitilize(str) {
//     let name = str;
//     let nameArr = name.split(" ");
//     let result = [];
//     for (let i = 0; i < nameArr.length; i++) {
//         result.push(nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1));
//     }
//     return result.join(" ");
// }

// let sentence = prompt("Enter your full name");
// document.write(`Your full name is: ${capitilize(sentence)}`);

// Answer no 12:
// function findLongestString(str) {
//     let name = str;
//     let nameArr = name.split(" ");
//     let result = [];
//     for (let i = 0; i < nameArr.length; i++) {
//         result.push(nameArr[i].length);
//     }
//     let value = 1;
//     for (let i = 0; i < result.length; i++) {
//         if(result[i] > value) {
//             value = result[i];
//         }
//     }
//     return value;
// }

// let sentence = prompt("Enter a sentence");
// document.write(`Your given sentence have longest string length is: ${findLongestString(sentence)}`);

// Answer no 13:
// function countNumOfLetter(words, letter) {
//     let letter_count = 0;
//     for (let i = 0; i < words.length; i++) {
//         if(words.charAt(i) == letter) {
//             letter_count += 1;
//         }
//     }
//     return letter_count;
// }

// let sentence = prompt("Enter a sentence").toLowerCase();
// let letter = prompt("Enter a letter").toLowerCase();
// document.write(`Find the specific letter length: ${countNumOfLetter(sentence, letter)}`);

// Answer no 14:
// function calcCircumference(radius) {
//     const pi = 3.14;
//     radius = radius;
//     return 2 * (pi * radius)
// }

// function calcArea(radius){
//     const pi = 3.14;
//     radius *= radius;
//     return radius; 
// }

// let radius = +prompt("Enter a radius value");
// document.write(`Circumference of circle: ${calcCircumference(radius)}<br>`);
// document.write(`Area of a circle: ${calcArea(radius)}`);

// End of Chapter no 35 to 38