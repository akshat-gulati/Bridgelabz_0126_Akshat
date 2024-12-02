1. // JS has no compiler it has interpreter

// print first program
console.log("This is a first program")

// Variables in js

// keyword - permanently reserved by js
// eg: for

// word - variables


2. // var, let, const

3. //Hoisting - var can be used before declaring it because declaration moves to top; (var x moves to the top)
// x = 39
console.log(x);
var x = 34;


// console.log(z); This will give error.
let z = 34

// undefined and not defined are different
// undefined means that the var is declared but not initialized
// not defined means that var doesn't exist


4. //Types in js
// primitives = number, string, null, undefined, boolean
// Reference = [] () {} - aisi koi bhi value jisko copy krne pr real copy nhi hota balki uska address pass ho jata h.
// Jhaa bracket lg gya vha pr Reference type ho gya


5. //Conditionals - if, else, else-if

if (-1) {
    console.log("hi");
}
else{
    console.log("hahaha");
    
}

6. //Loops - for, while
console.log("printing for loop")
for (let index = 0; index < 10; index++) {
    // console.log(index);
}

console.log("printing while loop")

let index = 10
while (index >= 0) {
    // console.log(index)
    index--;
}

7. // Function

function multiply(num) {
    for (let index = 1; index <= 10; index++) {
        console.log(num + " * " + index + " = " + index*num);
    }
}

multiply(7)

8. // Arrays

var arr = [11,2,33,44,55,66,77]
arr.push(99)
arr.pop()
arr.unshift(0)
arr.shift()

arr.splice(3,3)
console.log(arr)