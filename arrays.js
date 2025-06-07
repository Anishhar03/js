var x = 1;
var x = 2; // ✅ No error

let y = 1;
// let y = 2; ❌ SyntaxError: Identifier 'y' has already been declared



const arr = [1, 2, 3, 4];

// 🔹 push(): Adds element at the end
arr.push(6); // [1, 2, 3, 4, 6]

// 🔹 pop(): Removes last element
arr.pop();   // [1, 2, 3, 4]

// 🔹 unshift(): Adds element at the beginning
arr.unshift(10); // [10, 1, 2, 3, 4]

// 🔹 shift(): Removes first element
arr.shift(); // [1, 2, 3, 4]

// 🔹 includes(): Checks if element exists
console.log(arr.includes(3)); // true

// 🔹 indexOf(): Returns index of element (or -1 if not found)
console.log(arr.indexOf(3));  // 2

// 🔹 slice(start, end): Returns a shallow copy, does NOT mutate original array
console.log(arr.slice(1, 3)); // [2, 3]

// 🔹 splice(start, deleteCount): Mutates original array
console.log(arr.splice(1, 3)); // [2, 3, 4]
console.log(arr); // [1] — arr was modified

// 🔹 push() with array: adds array as a nested element
const brr = [2, 3, 4];
arr.push(brr); // [1, [2, 3, 4]]

// 🔹 concat(): Merges arrays, returns a new array (does NOT mutate)
const totalarr = arr.concat(brr);
console.log(totalarr); // [1, [2, 3, 4], 2, 3, 4]

// 🔹 Spread operator (...) — expands arrays into individual elements
const tarr = [...arr, ...brr];
console.log(tarr); // [1, [2, 3, 4], 2, 3, 4]

// 🔹 flat(): Flattens nested arrays — depth can be specified
const fullarr = tarr.flat(Infinity);
console.log(fullarr); 
// [1, 2, 3, 4, 2, 3, 4]

// 🔹 Array.from(): Creates an array from iterable or array-like object
console.log(Array.from("ANISH")); 
// ['A', 'N', 'I', 'S', 'H']

// 🔹 Array.of(): Creates array from a set of values
let a1 = 10;
let a2 = 19;
let a3 = 18;
console.log(Array.of(a1, a2, a3)); 
// [10, 19, 18]
// 🔹 map(): Transform array elements
const nums = [1, 2, 3];
const squared = nums.map(x => x * x); 
console.log(squared); // [1, 4, 9]

// 🔹 filter(): Filter elements based on condition
const evens = nums.filter(x => x % 2 === 0); 
console.log(evens); // [2]

// 🔹 reduce(): Reduces array to single value
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 6

// 🔹 find(): Returns first matching element
console.log(nums.find(x => x > 1)); // 2

// 🔹 every(): Checks if all elements satisfy condition
console.log(nums.every(x => x > 0)); // true

// 🔹 some(): Checks if any element satisfies condition
console.log(nums.some(x => x > 2)); // true

// 🔹 sort(): Sorts array (lexical by default)
const mixed = [3, 1, 10];
mixed.sort(); // [1, 10, 3] - wrong for numbers
mixed.sort((a, b) => a - b); // [1, 3, 10] - correct numerical sort
