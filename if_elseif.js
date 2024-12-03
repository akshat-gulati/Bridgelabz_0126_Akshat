// Read a single digit number and write the number in word
function numberToWord(num) {
    let words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return num >= 0 && num <= 9 ? words[num] : "Invalid input";
}

let input = parseInt(prompt("Enter a single-digit number:"));
alert(numberToWord(input));


//Read a Number and Display the week day (Sunday, Monday,…)
function numberToWeekday(num) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return num >= 1 && num <= 7 ? weekdays[num - 1] : "Invalid input";
}

let input1 = parseInt(prompt("Enter a number (1-7):"));
alert(numberToWeekday(input1));


//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
function numberToPlaceValue(num) {
    if (num === 1) return "Unit";
    else if (num === 10) return "Ten";
    else if (num === 100) return "Hundred";
    else if (num === 1000) return "Thousand";
    else if (num === 10000) return "Ten Thousand";
    else if (num === 100000) return "Lakh";
    else return "Invalid input";
}

let input2 = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc):"));
alert(numberToPlaceValue(input2));


/*
Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c 3. c + a / b
2. a % b + c 4. a * b + c
*/
let a = parseFloat(prompt("Enter the first number (a):"));
let b = parseFloat(prompt("Enter the second number (b):"));
let c = parseFloat(prompt("Enter the third number (c):"));

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;

let max = operation1;
let min = operation1;

if (operation2 > max) max = operation2;
if (operation3 > max) max = operation3;
if (operation4 > max) max = operation4;

if (operation2 < min) min = operation2;
if (operation3 < min) min = operation3;
if (operation4 < min) min = operation4;

alert("Results:\n" +
    "1. a + b * c = " + operation1 + "\n" +
    "2. a % b + c = " + operation2 + "\n" +
    "3. c + a / b = " + operation3 + "\n" +
    "4. a * b + c = " + operation4 + "\n\n" +
    "Maximum: " + max + "\n" +
    "Minimum: " + min);
