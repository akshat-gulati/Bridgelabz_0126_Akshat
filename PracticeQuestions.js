const numbers = [5, 12, 7, 5, 9, 12, 3, 7, 8, 1, 4, 6, 9, 2, 8, 10, 3, 11, 6, 4];
let n = numbers.length

// Write a Program to Cyclically Rotate an Array by One

arr = [1,2,3,4,5,6,7,89]


let lastElement = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = lastElement;

// console.log(arr);

// Find Duplicates in an Array


let set = new Set()
let duplicate = []

for(let num of numbers){
    if (set.has(num)) {
        duplicate.push(num)
    }
    else{
        set.add(num)
    }
}

console.log(duplicate);

// Find the Occurrence of an Integer in the Array

let x = 4

function occurrence(numbers) {
    for (let i = 0; i < numbers.length/2; i++) {
        if (numbers[i] == x) {
            return i
        }
        if (numbers[n-i-1] == x ) {
            return n-i-1
        }
    }
}


console.log(occurrence(numbers));

// Sort the Array of 0s, 1s, and 2s


function sort012(arr) {
    let lo = 0;
    let hi = arr.length - 1;
    let mid = 0;

    
    while (mid <= hi) {
            if(arr[mid] === 0) {
            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
            lo++;
            mid++;
         }
         else if(arr[mid] === 1) {
             mid++;
         }
         else {
            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
            hi--;
         }
    }
    return arr
}
console.log(sort012([0, 1, 2, 0, 1, 2, 0, 1, 2, 0]));

// Move All the Negative Elements to One Side of the Array

negArr = [-100, -57, -77, -39, -78, 13, 64, -67, 43, -70, 6, -97, 21, 73, 77, -88, -48, 56, -57, -65]

function moveAll(arr) {
    let result = [];
    let negatives = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatives.push(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    
    return result.concat(negatives);
}

console.log(moveAll(negArr));


// Find the Row with a Maximum Number of 1’s

function rowWithMaxOnes(matrix) {
    let maxRowIndex = -1;
    let maxCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        let count = matrix[i].reduce((acc, val) => acc + val, 0);
        if (count > maxCount) {
            maxCount = count;
            maxRowIndex = i;
        }
    }

    return maxRowIndex;
}

const matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

// console.log(rowWithMaxOnes(matrix)); 

// Majority Element

arr = [2, 3, 2, 3, 3, 5];

function majority(arr) {
    let count = 0;
    let element = null;

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            element = arr[i];
        }
        count += (arr[i] === element) ? 1 : -1;
    }

    return element;
}

console.log(majority(arr));

// Wave Array

arr = [20, 10, 8, 6, 4, 2]


function swap(a, b) {
    return {a: b, b: a};
}

function wavePattern(arr) {
    arr.sort()

    ({a: arr[i], b: arr[i-1]} = swap(arr[i-1], arr[i]));
}
// console.log(wavePattern(arr));

// Find Peak Element in Array

arr = [1, 2, 4, 5, 7, 8, 3];
n = arr.length;

function peak(arr) {
    for (let i = 1; i < n - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            console.log(arr[i]);
        }
    }
}

peak(arr);

// --------------------------------------------------------
// Subarray with Given Sum

function subarraySum(arr, sum) {
    let sumArr = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        sumArr += arr[right];

        while (sumArr > sum && left <= right) {
            sumArr -= arr[left];
            left++;
        }

        if (sumArr == sum) {
            return {left, right};
        }
    }

    return null; // If no subarray is found
}


arr = [15, 2, 4, 8, 9, 5, 10, 23];
let sum = 23;
let result = subarraySum(arr, sum);

result.left ++
result.right ++
console.log("Left Index: " + result.left);
console.log("Right Index: " + result.right);

// Find Whether an Array is a Subset of Another
function subsetCheck(arr1, arr2) {
    let set = new Set(arr1);
    for (let elem of arr2) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1,2];

console.log(subsetCheck(arr1, arr2));

// Find the Missing Integer

function missing(arr, n) {
    
    set = new Set(arr)

    for(let i =1; i<=n; i++){
        if(! set.has(i)){
            return i
        }
    }
}

arr = [1, 2, 4, 6, 3, 7, 8] , n = 8
console.log(missing(arr, n));


// Count Pairs with the Given Sum

arr = [1, 5, 7, -1, 5]
target = 6

function pairs(arr, target) {
    let count = 0
    set = new Set(arr)
    for(let i =1; i<arr.length; i++){
        if (set.has(target-arr[i])) {
            count++
        }
    }
    return count
}

console.log(pairs(arr, target));

// Find Common Elements in Three Sorted Arrays

function commonElements(a, b, c) {
    let common = [];
    let setA = new Set(a);
    let setB = new Set(b);

    for (let i = 0; i < c.length; i++) {
        if (setA.has(c[i]) && setB.has(c[i])) {
            common.push(c[i]);
        }
    }
    return common;
}

let A = [1, 5, 10, 20, 30];
let B = [5, 13, 15, 20];
let C = [5, 20];

console.log(commonElements(A, B, C)); // Output: [5, 20]

// Find the First Non-Repeating Element in a Given Array of Integers

function non_repeating(arr) {
    const count = new Map();

    for (let num of arr) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for (let num of arr) {
        if (count.get(num) === 1) {
            return num;
        }
    }

    return null;
}

arr = [-1, 2, -1, 3, 0];
console.log(non_repeating(arr)); 