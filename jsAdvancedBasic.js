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