/*
Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value
*/
let number = [];
for(let i=0;i<5;i++){
    let num = Math.floor(Math.random()*(900-100+1))+100;
    number.push(num);
}
let min = Math.min(...number);
let max = Math.max(...number);

console.log(number);
console.log(min);
console.log(max);


/*
Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/
const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Please provide both day and month as arguments.");
    process.exit(1);
}

const day = parseInt(args[0], 10);
const month = parseInt(args[1], 10);

function isDateInRange(day, month) {
    if (isNaN(day) || isNaN(month) || month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }
    if ((month === 3 && day >= 20) || (month === 6 && day <= 20) || (month > 3 && month < 6)) {
        return true;
    }
    return false;
}

console.log(isDateInRange(day, month));


/*
Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.
*/
const args1 = process.argv.slice(2);

if (args1.length !== 1) {
    console.log("Please provide a single year as input.");
    process.exit(1);
}

const year = parseInt(args1[0], 10);

function isLeapYear(year) {
    if (isNaN(year) || year < 1000 || year > 9999) {
        return "Year must be a 4-digit number.";
    }
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    }
    return "Not a Leap Year";
}

console.log(isLeapYear(year));



/*
Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
*/
function flipCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(result);
}

flipCoin();
