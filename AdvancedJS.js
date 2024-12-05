// 1. //Higher Order Function
// Kind of functions that accepts A function in a parameter or return a function or both.
// eg. forEach method

function abcd() {
    
}

abcd(function(){})

// abcd is higher order function as it accepts another function as a parameter

function abcd() {
    return function(){}
}

abcd()

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using forEach to iterate over the array
numbers.forEach((number, index) => {
//   console.log(`Index: ${index}, Value: ${number}`);
});
// The forEach method is a great example of a higher-order function because it takes a callback function and executes it for each element in an array.



// 2. //Constructor Function
// Normal fn which uses this keyword and while calling the fn new keyword can be used
// function saanchaOfBiscuit() {
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugar";
// }

// var biscuit1 = new saanchaOfBiscuit();
// var biscuit2 = new saanchaOfBiscuit();
// var biscuit3 = new saanchaOfBiscuit();

// // Change the color of the second biscuit to blue
// biscuit2.color = "blue";

// console.log(biscuit1.color); // Output: brown
// console.log(biscuit2.color); // Output: blue
// console.log(biscuit3.color); // Output: brown

// when you want to make multiple elements with same properties we use constructors

function saanchaOfBiscuit(color) {
    this.width = 12;
    this.height = 22;
    this.color = color;
    this.taste = "sugar";
}

var biscuit1 = new saanchaOfBiscuit("red");
var biscuit2 = new saanchaOfBiscuit("blue");
var biscuit3 = new saanchaOfBiscuit("pink");

// Change the color of the second biscuit to blue
biscuit2.color = "blue";

console.log(biscuit1.color); 
console.log(biscuit2.color); // Output: blue
console.log(biscuit3.color); // Output: brown

// 3. //First class function
// When fn can be treated as a variable, which can be saved and passed as a argument to another function

// var x = function() {
    
// }

// setTimeout and setInterval are first class fn

// 4. // new keyword creates a blank instance


// 5. //IIFE = immediately invoked function expression
// trick to execute function asap to create a private variable(var that cant be accessed directly)


// ans = (function(){
//     let a = "Alice"
//     return(`Hello, ${a}!`)
// })()

// console.log(ans)

let ans = (function(){
    let a = "Alice";
    return {
        getter: function() {
            console.log(a);
        },
        setter: function(val) {
            a = val;
        }
    };
})();

ans.setter(22); 
ans.getter();

// 6. Prototype
var obj = {name: "Akshat"}
console.log(obj.name.length);
 

// In JavaScript, the prototype object contains many helper properties and methods that can be used to access and manipulate elements. This is especially true for built-in objects like Array, String, Object, etc.
// Built in helper fns

// 7. Prototypal Inheritance

// passing some features via prototype

var human = {
    name: "Akshat",
    canFly: false,
    canTalk: true,
    canWalk: true
}

var chitkaraStudnt = {
    solveQuestions: true,
    createWebsite: true
}

chitkaraStudnt.__proto__ = human

console.log(chitkaraStudnt.canFly);

// 8. This, call, apply, bind

// whenever some Element is outside of {}, we call it global scope

console.log(this);

// function inside object is called method

var obj = {
    name: "Akshat",
    hiHello: function(){
        console.log(this);
        
    }
}

// obj.hiHello()

// value of this in
// global => window
// function => window
// method => object

// in any method "this" refers to parent object

// in case of addEventListener this always refers to anything ahead of .addEventListener
// eg. Button


// call, apply, bind

// function abcd() {
//     console.log(this);
// }

// var obj = {age: 24}

// abcd.call(obj)

// The call method in JavaScript is used to invoke a function with a specified this value and arguments provided individually. This can be particularly useful when you want to borrow a method from one object and use it on another.

function abcd(a,b,c) {
    console.log(this, a, b, c);
}

var obj = {age: 24}

abcd.call(obj, 1, 2, 3)

// apply slightly different from call
function abcd(a,b,c) {
    console.log(this, a, b, c);
}

var obj = {age: 25}

abcd.apply(obj,[4,5,6]) // apply says you can only pass 2 parameters


function abcd() {
    console.log(this);
}

var obj = {age: 27}

var bindedfn =  abcd.bind(obj)

bindedfn();

// 9. pure and impure fn

// pure fn has 2 features
// 1: return same output type for same input type
// 2: it will never change update value of global var

// impure fn
function abcd(val) {
    return Math.random()*val
}
var ans1 = abcd(2)
console.log(ans1);
