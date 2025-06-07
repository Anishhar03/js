// ✅ Basic for loop
for (let i = 0; i < 5; i++) {
    console.log("i =", i); // Output: i = 0 ... i = 4
}

// ✅ Loop over an array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // apple, banana, cherry
}

// ✅ Using break (exit loop early)
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log("Break example:", i); // 0, 1, 2
}

// ✅ Using continue (skip current iteration)
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log("Continue example:", i); // 0, 1, 3, 4 (skips 2)
}

// ✅ Nested for loops
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
        // i=1, j=1
        // i=1, j=2
        // i=2, j=1
        // i=2, j=2
    }
}

// ✅ Infinite loop (DON'T RUN — just an example)
let count = 0;
for (;;) {
    count++;
    if (count === 3) break; // prevents infinite loop
    console.log("Infinite style, count =", count); // 1, 2
}

// ✅ Loop in reverse
for (let i = 5; i >= 1; i--) {
    console.log("Reverse i =", i); // 5 to 1
}

// ✅ Loop with custom step
for (let i = 0; i <= 10; i += 2) {
    console.log("Even numbers:", i); // 0, 2, 4, ..., 10
}

// ✅ Loop through string
const str = "ANISH";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // A N I S H
}



//for each
const arr = [1, 2, 3];

arr.forEach(function(value, index, array) {
    console.log(`Index: ${index}, Value: ${value}`);
});
arr.forEach((item)=>{
    console.log(item)
})//does not return value


// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3



// map()
// 👉 Returns a new array with transformed values.

const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

//. filter()
//👉 Returns a new array with elements that pass a condition.

const ages = [12, 25, 17, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [25, 30]

// 4. reduce()
//👉 Reduces array to a single value (sum, product, etc.).


const values = [10, 20, 30];
const total = values.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 60
// acc = accumulator (total so far)

// curr = current value in loop

// 2nd param is initial value

// forEach() → Loop over items

const barr = [10, 20, 30];
barr.forEach((value, index) => {
  console.log(index, value); // 0 10, 1 20, 2 30
});

// findIndex() → Return index of first match or -1

const items = ["pen", "book", "pencil"];
console.log(items.findIndex(item => item === "book")); // 1