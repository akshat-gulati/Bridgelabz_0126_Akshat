//Read a single digit number and write the number in word using Case
let input = parseInt(prompt("Enter a single-digit number (0-9):"));

let word;
switch (input) {
    case 0:
        word = "Zero";
        break;
    case 1:
        word = "One";
        break;
    case 2:
        word = "Two";
        break;
    case 3:
        word = "Three";
        break;
    case 4:
        word = "Four";
        break;
    case 5:
        word = "Five";
        break;
    case 6:
        word = "Six";
        break;
    case 7:
        word = "Seven";
        break;
    case 8:
        word = "Eight";
        break;
    case 9:
        word = "Nine";
        break;
    default:
        word = "Invalid";
}

alert(word);



// Read a Number and Display the week day (Sunday, Monday,…)
let input2 = parseInt(prompt("Enter a number (1-7):"));

let weekday;
switch (input2) {
    case 1:
        weekday = "Sunday";
        break;
    case 2:
        weekday = "Monday";
        break;
    case 3:
        weekday = "Tuesday";
        break;
    case 4:
        weekday = "Wednesday";
        break;
    case 5:
        weekday = "Thursday";
        break;
    case 6:
        weekday = "Friday";
        break;
    case 7:
        weekday = "Saturday";
        break;
    default:
        weekday = "Invalid input";
}

alert(weekday);


// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
let input1 = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc):"));

let placeValue;
switch (input1) {
    case 1:
        placeValue = "Unit";
        break;
    case 10:
        placeValue = "Ten";
        break;
    case 100:
        placeValue = "Hundred";
        break;
    case 1000:
        placeValue = "Thousand";
        break;
    case 10000:
        placeValue = "Ten Thousand";
        break;
    case 100000:
        placeValue = "Lakh";
        break;
    default:
        placeValue = "Invalid input";
}

alert(placeValue);
