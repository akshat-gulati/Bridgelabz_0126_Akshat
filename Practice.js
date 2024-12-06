1. //filter map reduce

// Map: Creates a new array with required modifications of previous arr

arr = [1,2,3,4,5]
newArr = arr.map(ele => ele * 2 )
console.log(newArr);

// filter: adds to a new array as per requirement

arr = [1,2,3,4,5]
newArr = arr.filter(ele => ele >= 2 )
console.log(newArr);

// Reduce: 

arr = [1,2,3,4,5]
newArr = arr.reduce((prev, curr) => curr = curr*prev)
console.log(newArr);


2. //Arrow Function

const k = () => {
    m = 34
    return m
}
console.log(k());


const add = (a, b) => a + b;
console.log(add(10, 20));

3. //Map and set
const x = new Map();
x.set("Apple" , 400)
x.set("banananananana" , 400)
x.set("orange" , 4000)

console.log(x);

4. //Destructuring assignment
let a, b, rest
[a, b, ...rest] = [1,2,3,4,5,6,7,8]
console.log(rest);

