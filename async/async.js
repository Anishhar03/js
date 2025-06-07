// 🔹 async Function
// Declares a function that always returns a Promise.

// 🔹 await
// Can only be used inside an async function to wait for a Promise to resolve.


// Simulate an async operation (e.g., fetch from server)
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
}

// Using async/await
async function fetchData() {
  console.log("1. Start fetching...");
  
  // Wait for the Promise to resolve
  const result = await getData(); // Code below this line pauses until resolved
  
  console.log("2. Result:", result);
  console.log("3. Done.");
}

fetchData();
//output
// 1. Start fetching...
// 2 seconds later...
// 2. Result: Data loaded
// 3. Done.



// Key Rules of await
// Only valid inside async functions (unless using top-level await in ES modules).

// Pauses execution of the current function without blocking the entire thread.

// Resumes after the Promise resolves



// Error Handling with try...catch
function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 0) reject("User not found");
      else resolve({ id, name: "Anish" });
    }, 1000);
  });
}

async function loadUser() {
  try {
    const user = await getUserData(0); // Will reject
    console.log("User:", user);
  } catch (error) {
    console.error("❌ Error caught:", error);
  }
}

loadUser();



//Sequential vs Parallel await
//seq
async function runSequential() {
  const data1 = await getData(); // 2s
  const data2 = await getData(); // +2s
  console.log("Sequential done");
}
//par
async function runParallel() {
  const p1 = getData(); // Start both
  const p2 = getData();
  
  const data1 = await p1;
  const data2 = await p2;
  console.log("Parallel done"); // Total time = ~2s
}



//await with Promise.all() (for batches)
async function loadAllData() {
  const results = await Promise.all([getData(), getData(), getData()]);
  console.log("All results:", results);
}



//async always returns a promise
async function hello() {
  return "hi";
}

hello().then(console.log); // Logs "hi"



//Real-world: API Fetch Example
async function fetchUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error("Network Error");

    const data = await response.json();
    console.log("User fetched:", data);
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

fetchUser(1);
