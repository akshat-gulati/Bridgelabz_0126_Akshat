1. // var let const
// es5 - var
// es6 - let const
// we are using es5 and es6 together

1.1 // var is fn scoped
//let is braces scoped 

function abcd() {
    for (var index = 0; index < 10; index++) {
        console.log(index);
    }
    console.log("Out of for loop");
    console.log(index);
}

abcd()

1.2 // var adds itself to the window object
// let const doesn't

// JS doesnt have few features but we can still use them as it is a part of browser, these features are not a part of js which are called window object - alert, prompt, console


2. //Browser context API - window, stack, heap memory


3. // Stack and Heap memory
// Stack is a serial order in which task is executed
// variables gets stored in heap memory
// in between calculation, if there is intermediate data that data gets stored in heap environment

4. //execution Context
// whenever the fn runs, fun will make its own imaginary container which will include 3 things
// 1: variables, 2: Function inside parent function 3: lexial environment

// ______________________________________________________
// |                                                    |
// |      var                              function     |
// |                                                    |
// |                                                    |
// |               lexical environment                  |
// |____________________________________________________|

// lexial environment: defines scope

function abcd() {
    var a = 12;
    function def() {
        var b = 23;
    }
    console.log(b);
}

abcd 

// Lexical environment: contains scope and scope chain(may not access child fn variables)

5. //How to copy Reference value
var a = [1,2,3,4,5]
var b = [...a]
b.pop()
console.log(b);

// ... are called spread operator used to copy elements from array

var obj = {"harsh":12, "akshat":13}
var obj2 = {...obj}
console.log(obj2);

6. //Truthy and Falsy
// falsy values: 0, false, undefined, null, NaN, document.all
// truthy values: remaining values are truthy

7. //switch case
switch (1) {
    case 1:
        console.log("this is one");
        break;

    default:
        console.log("this id default");
        break;
};

8. //foreach, forin, do-while
// foreach works on array only

var a = [63, 727, 8, 778, 89, 94, 2, 890, 6543, 100]

a.forEach(function(val) {
    console.log(val+2);
})

// for-in used to loop on objects

var obj = {
    name: "harsh",
    age: 24,
    city: "Delhi"
}

for (var key in obj) {
    console.log(obj[key]);
}

// do-while loop

var a = 12;
do {
    console.log(a++); // This will work for atleast one.
} while (a<11);

9. // Callback function
// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. This is particularly useful for asynchronous operations, like fetching data from a server.
setTimeout(function() {
    console.log("2 sec bad");
}, 2000);


// Define a function that takes a callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// Define a callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Call the greet function with the callback
greet('Alice', sayGoodbye);



function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 2000);
}

function processData() {
    console.log('Processing data');
}

fetchData(processData);

10. //First class function

// in js there is a concept fns ko use kr skte ho as a value. simply fn can be treated as values

var a = function(){}

function abc(a) {
    a();
}

abc(function(){
    console.log("Hello");
})

11. //array is a type of object in js, below is how it is implemented

var arr = [1,2,3,4,5]

// arr = { //index, number
//     0:1,
//     1:2
// }
console.log(arr);

arr[-1] = 45

console.log(arr);

console.log(Array.isArray([]))
console.log(Array.isArray({}))

12. //How to delete Object prop

var a = {
    name: "Akshat",
    age: 24
}

delete a.age
console.log(a);
