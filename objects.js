// 🔹 Singleton object — created using constructor or Object.create()
const singleton = Object.create(null); // creates an empty object with no prototype

// 🔹 Object literal syntax (most common way to define objects)
const user = {
    NAME: "ANISH",
    AGE: 18,
    isloggedin: false
};

// 🔸 Accessing properties
console.log(user.NAME);        // Output: ANISH (dot notation)
console.log(user["NAME"]);     // Output: ANISH (bracket notation, useful for dynamic keys)

// 🔸 Adding method BEFORE freezing
user.indian = function () {
    console.log(`${this.NAME}India`);
};

// 🔸 Freezing the object — no further changes allowed (add/delete/modify)
Object.freeze(user);

console.log(user.indian);      // Output: [Function: indian]
user.indian();                 // Output: ANISHIndia

// 🔹 Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Option 1: Object.assign(target, source)
const obj3 = Object.assign({}, obj1, obj2); // creates a new merged object
console.log(obj3);            // Output: { a: 1, b: 2, c: 3, d: 4 }

// Option 2: Spread operator
console.log({ ...obj1, ...obj2 }); // Output: { a: 1, b: 2, c: 3, d: 4 }

// 🔹 Object utility methods
console.log(Object.keys(user));   // Output: [ 'NAME', 'AGE', 'isloggedin', 'indian' ]
console.log(Object.values(user)); // Output: [ 'ANISH', 18, false, [Function: indian] ]
console.log(Object.entries(user)); // Output: [['NAME', 'ANISH'], ['AGE', 18], ['isloggedin', false], ['indian', [Function]]]

console.log(user.hasOwnProperty("NAME")); // Output: true
console.log(user.hasOwnProperty("address")); // Output: false

const user = {
    NAME: "ANISH",
    AGE: 18,
    isloggedin: false
};

// 🔹 Destructuring with alias
const { NAME: NAAM } = user;
console.log(NAAM); // Output: ANISH

// 🔹 Full destructuring example
const { AGE, isloggedin } = user;
console.log(AGE);         // Output: 18
console.log(isloggedin);  // Output: false


const student = {
    name: "Anish",
    marks: {
        math: 95,
        physics: 88
    }
};

// Destructuring nested properties
const {
    marks: { math, physics }
} = student;

console.log(math);    // Output: 95
console.log(physics); // Output: 88
