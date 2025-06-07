function adding(number,number2){
    let res=number+number2
    return `${number}+${number2} res`
}

const res=adding(1,2)
console.log(res)//1+2 res if not return then undefined

function adding(number, number2) {
    let res = number + number2;
    // no return
}


//rest operator
function f(val1,...num1){
    return num1
}
console.log(f(100,200,300))//[ 200, 300 ]

const user = {
    NAME: "ANISH",
    AGE: 18,
    isloggedin: false
};

function f1(obj){
    console.log(`name is ${obj.NAME}`)
}
    console.log(f1(user))//name is ANISH
                        // undefined

//arrow function

const sum = (a, b) => a + b//implicit return when {} is not used
console.log(sum(5, 6)); // Output: 11
//this cannot be used in it


//Function Parameter Destructuring

function f2({ NAME, AGE }) {
    return `Name: ${NAME}, Age: ${AGE}`;
}
console.log(f2(user)); 
// Output: Name: ANISH, Age: 18


// Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet()); // Output: Hello, Guest
console.log(greet("Anish")); // Output: Hello, Anish


//iife An IIFE is a function that runs immediately after it is defined.

// It stands for:
// 🔸 Immediately Invoked Function Expression

(function(name) {
    console.log(`Hello, ${name}`);
})("Anish"); // Output: Hello, Anish

//IIFE with Arrow Function:

(() => {
    console.log("Arrow IIFE running!");
})(); // Output: Arrow IIFE running!