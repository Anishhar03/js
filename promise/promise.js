//  What is a Promise?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// States of a Promise:
// pending: Initial state, neither fulfilled nor rejected.

// fulfilled: The operation completed successfully.

// rejected: The operation failed.
//Syntax of a Promise
let promise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  // If successful
  resolve("Success value");

  // If error occurs
  reject("Error value");
});


const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Operation Successful!");
    } else {
      reject("❌ Operation Failed!");
    }
  }, 2000);
});

// Handling the promise
myPromise
  .then((result) => {
    console.log("THEN:", result);
  })
  .catch((error) => {
    console.log("CATCH:", error);
  })
  .finally(() => {
    console.log("This runs no matter what!");
  });

//  then() handles success
// 🔹 catch() handles failure
// 🔹 finally() runs after then or catch, regardless of the outcome


//Simulate an API Fetch with Promise

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeApiData = { name: "Anish", age: 21 };
      resolve(fakeApiData);
    }, 1000);
  });
}

fetchUserData()
  .then((data) => {
    console.log("User fetched:", data);
  })
  .catch((err) => {
    console.error("Error:", err);
  });



// Promise Chaining
// You can chain .then() calls for sequential operations.

function multiplyByTwo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}

multiplyByTwo(5)
  .then((res) => {
    console.log(res); // 10
    return multiplyByTwo(res);
  })
  .then((res2) => {
    console.log(res2); // 20
  });



//   Using async/await 
function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 1000);
  });
}

async function showResult() {
  try {
    const num = await getNumber(); // Waits until promise resolves
    console.log("Result:", num);
  } catch (err) {
    console.error("Error:", err);
  }
}

showResult();


//Real Use Case: Fetching Data from API
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) throw new Error("Network error");
    
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();



// 🧪 Convert Callback to Promise
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, src);
  script.onerror = () => callback("Error loading " + src);
  document.head.append(script);
}

function loadScriptPromise(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
}
