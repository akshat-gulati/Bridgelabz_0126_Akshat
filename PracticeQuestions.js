// Write a Program to Cyclically Rotate an Array by One

arr = [1,2,3,4,5,6,7,89]


let lastElement = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = lastElement;

console.log(arr);