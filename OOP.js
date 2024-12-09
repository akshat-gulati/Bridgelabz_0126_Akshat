// Technically classes do not exist in javascript, It was introduced in ES6. JS is primarily a prototype based language, and its classes are a syntactic sugar which means it pretends to be OOPS but under the hood it works differently

// OOP is a programming pardigm(way of writing program)
// object - collection of properties

// object litreal - means 1 object

// constructor function
//proto
// classes
// instances - new, this

// 4 pillars
// Abstraction, Encapsulation, Inheritance, Polymorphism

const user = {
    username: "Akshat",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
    }

}

// console.log(user.loginCount);
user.getUserDetails()
// console.log(this);

function userx(username, logincount, isLoggedin) {
    this.username = username
    this.logincount = logincount
    this.isLoggedin = isLoggedin

    // return this
}

const user1 = userx("Akshat", 10, true)
const user2 = userx("AkshatJi", 15, false) //user1 value overriden
const user3 = new userx("AkshatJixxx", 155, false) //new generates empty object called instance

// console.log(user1);
// console.log(user3.constructor);



// -------------------------------------------------------------------------------

// Object is something that contains properties and method
// JS has very special property called proto

// Below is a object
const student = {
    fullName: "Akshat Gulati",
    marks: 95,
    printMarks: function () {
        console.log("marks: ", this.marks);
    },
};

// console.log(student);
student.printMarks();

// prototype are predefined functions and methods used to access the array
const scholl = {
    calcFee() {
        console.log("Fee is just $1000000");
    }
}

student.__proto__ = scholl //__proto__ is reference type
student.calcFee()

const student1 = {
    fullName: "Akshat GulatiJi",
    marks: 95,
    printMarks: function () {
        console.log("marks: ", this.marks);
    },
    calcFee() {
        console.log("Fee is just $1000000000");
    }
};

student1.__proto__ = scholl //__proto__ is reference type
student1.calcFee()


// --------------------------------------------------------------------------------------
// Classes: Template of an object

class Car {

    start(){
        console.log("Starting");
        
    }
    stop(){
        console.log("Stopping");

    }
    constructor(parameters) {
        
    }
}