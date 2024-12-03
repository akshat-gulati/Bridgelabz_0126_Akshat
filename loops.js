/*
Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n.
*/
const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative number.");
} else {
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}

/*
Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form
*/
const n1 = parseInt(process.argv[2]);

if (isNaN(n1) || n1 <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    let harmonicNumber = 0;
    
    for (let i = 1; i <= n1; i++) {
        harmonicNumber += 1 / i;
    }
    
    console.log(`The ${n1}th harmonic number is: ${harmonicNumber}`);
}


//Write a program that takes a input and determines if the number is a prime.
const num = parseInt(prompt("Enter a number:"));

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

if (isPrime(num)) {
    alert(`${num} is a prime number.`);
} else {
    alert(`${num} is not a prime number.`);
}


/*
Extend the program to take a range of number as input and output the Prime
Numbers in that range.
*/
const start = parseInt(prompt("Enter the starting number of the range:"));
const end = parseInt(prompt("Enter the ending number of the range:"));

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let primeNumbers = [];
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        primeNumbers.push(num);
    }
}

if (primeNumbers.length > 0) {
    alert(`Prime numbers between ${start} and ${end}: ${primeNumbers.join(', ')}`);
} else {
    alert(`There are no prime numbers between ${start} and ${end}.`);
}


/*
Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/
const num2 = parseInt(prompt("Enter a number to compute its factorial:"));

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

if (num2 < 0) {
    alert("Factorial is not defined for negative numbers.");
} else {
    const result = factorial(num2);
    alert(`${num2}! = ${result}`);
}



/*
Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.
*/
const num3 = parseInt(prompt("Enter a number to compute its factorial:"));

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

if (num3 < 0) {
    alert("Factorial is not defined for negative numbers.");
} else {
    const result = factorial(num3);
    alert(`${num3}! = ${result}`);
}


/*
Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..
*/
const n2 = parseInt(process.argv[2]);

if (isNaN(n2) || n2 < 0) {
    console.log("Please enter a valid non-negative number.");
} else {
    let i = 0;
    while (Math.pow(2, i) <= Math.pow(2, n) && Math.pow(2, i) <= 256) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
        i++;
    }
}


/*
Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..
*/
let low = 1;
let high = 100;
let guess;

alert("Think of a number between 1 and 100, and I will try to guess it!");

while (low <= high) {
    guess = Math.floor((low + high) / 2);
    let response = prompt(`Is your number greater than, less than, or equal to ${guess}? (Enter 'greater', 'less', or 'equal')`);

    if (response.toLowerCase() === "equal") {
        alert(`I guessed it! The magic number is ${guess}.`);
        break;
    } else if (response.toLowerCase() === "greater") {
        low = guess + 1;
    } else if (response.toLowerCase() === "less") {
        high = guess - 1;
    } else {
        alert("Please respond with 'greater', 'less', or 'equal'.");
    }
}



//Extend the Flip Coin problem till either Heads or Tails wins 11 times.
let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? 'Heads' : 'Tails';

    if (flip === 'Heads') {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
}

if (headsCount === 11) {
    console.log("Heads wins 11 times!");
} else if (tailsCount === 11) {
    console.log("Tails wins 11 times!");
}


/*
Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made.
*/
let money = 100;
let goal = 200;
let betsMade = 0;
let wins = 0;

while (money > 0 && money < goal) {
    // Place a Re 1 bet
    let bet = Math.random() < 0.5 ? 1 : -1; // Win (+1) or lose (-1)

    if (bet === 1) {
        wins++; 
    }

    money += bet; 
    betsMade++; 

    console.log(`Bets made: ${betsMade}, Money: Rs ${money}, Wins: ${wins}`);
}

if (money === 0) {
    console.log(`Gambler went broke! Total bets made: ${betsMade}, Total wins: ${wins}`);
} else if (money === goal) {
    console.log(`Gambler reached the goal of Rs 200! Total bets made: ${betsMade}, Total wins: ${wins}`);
}
