// String reverse

function name(...totalArg) {
    for(let arg of totalArg){
        userInput(arg)
    }
    
}

function userInput(str) {

    this.str = str
    let ans = ""

    for(let i = str.length-1; i>=0; i--){
        ans+=str.charAt(i)
    }
    
    console.log(ans);   
}

// name("Bridgelabz", "Magic Software", "Chitkara")

// String Methods


let myName = "       Akshat Gulati             "
let myName2 = "Akshat Gulati"
// console.log(myName);


// console.log("Printing Length: " + myName.length);
// console.log("Char at 0-index 5: " + myName.charAt(5));
// console.log(myName.slice(0,4));
// console.log(myName.substring(0,4));
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.concat(", is the best programmer"));
// console.log(myName.trim());
// console.log(myName.trimStart());
// console.log(myName.trimEnd());

// let x = myName.repeat(2)
// console.log(x);


// let old = "This is Microsoft"
// let newOne = old.replace("Microsoft", "Bridgelabz")
// console.log(newOne);

// let arr = myName2.split(" ")
// // console.log(arr);


// -----------------------------------------

let arr1 = [100,2,3,5,6,1,5,3,400]
let max = arr1[0], min = arr1[0]
for(let i = 1; i<arr1.length; i++){
    if (arr1[i] > max) {
        max = arr1[i]
    }
    if (arr1[i] < min) {
        min = arr1[i]
    }
}

console.log(max);
console.log(min);

// ---------------------------------------------

let sum = 0

for(let i = 0; i<arr1.length; i++){
    sum += arr1[i]
}
console.log(sum);

// ------------------------------------------------

let arr2 = [-1, 23,4,5,-4,-6,-8,3]
let negative = []
let positive = []

for(let i = 0; i<arr2.length; i++){
    if (arr2[i] >= 0) {
        positive.push(arr2[i])
    }
    else{
        negative.push(arr2[i])
    }
}
console.log(positive);
console.log(negative);

// ---------------------------------------------------
//Union

let arr3 = [1,2,3,4,5,6]
let arr4 = [7,8,9,10,11,3,4,5,6]

let ans = arr3 + arr4

console.log(ans);

// -------------------

// intersection

let set = new Set(arr4); // Add elements of arr4 to the Set
let ans1 = [];

for (let i = 0; i < arr3.length; i++) {
    if (set.has(arr3[i])) {
        ans1.push(arr3[i]);
    }
}

console.log(ans1);