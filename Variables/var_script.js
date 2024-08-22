// We can even write javascript code in the console of the browser

// Scope of var is global, variables declared with this keywords can be accessed anywhere 
// Javascript is a loosely typed language, datatypes are assigned automatically

var firstVar = 25;
console.log(firstVar)

// The below given code wouldn't give an error
console.log(secondVar)
var secondVar = 99;
console.log(secondVar)

// Scope of let and const is local, variables declared with these keywords can only be accessed within the block in which they are declared and not outside that block

// let should be preferred over var as use of var sometimes results in bugs

// The below given code would not result in an error as scope of variable 'msg' is global and can be accessed outside its scope because it is created with var
if(true){
    var msg = "Hello World!";
}

console.log(msg)

// The below given code would result in an error as scope of variable 'a' is local and cannot be accessed outside its scope because it is created with let
if(true){
    let a = "Hello";
}

console.log(a)

// Reassignment is not allowed for variables declared with const keyword
// variables created with const keyword have to be initialized at the time of declaration

// The below given line would result in an error 
const num;

const myNum = 86;

// The below given line would result in an error as Reassignment is not allowed for variables declared with const keyword
myNum = 73;

// Operations can be performed on variables created with const keyword but its value cannot be changes
console.log(myNum * 6);

// The below given code would result in an error as scope of variable 'myNum' is local because it is created with const
if(true){
    const firstNum = 61;
}

console.log(firstNum)


