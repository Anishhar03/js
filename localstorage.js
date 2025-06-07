// 🟠 Everything About Local Storage in JavaScript

// 📌 What is Local Storage?
// Local Storage is a web storage API that allows storing data in the browser with no expiration time.

// 🔐 Properties:
// - Stores only strings
// - Persists across browser sessions
// - Maximum size ~5MB

// 🧩 Common Methods:
// setItem(key, value) → stores data
// getItem(key) → retrieves data
// removeItem(key) → deletes a specific key
// clear() → removes everything

// ✅ Example 1: Set and Get Data
localStorage.setItem("name", "Anish");
const name = localStorage.getItem("name");
console.log("Name from localStorage:", name);

// ✅ Example 2: Store Objects
const userObj = { name: "Anish", age: 21 };
localStorage.setItem("user", JSON.stringify(userObj)); // must stringify
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log("User Object:", retrievedUser);

// ✅ Example 3: Remove and Clear
localStorage.removeItem("name"); // removes one
localStorage.clear(); // removes all

// ✅ Use Case: Persistent Theme Preference
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}
function applySavedTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) document.body.className = theme;
}
applySavedTheme();

// ✅ Loop Through LocalStorage
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

// ⚠️ Caveats:
// - Only works in the browser (not server-side)
// - Can be cleared by user/browser settings
// - Use JSON.stringify/parse for complex types

// 🧪 Bonus: Save form input persistently
const input = document.createElement("input");
document.body.appendChild(input);
input.value = localStorage.getItem("inputVal") || "";
input.addEventListener("input", (e) => {
  localStorage.setItem("inputVal", e.target.value);
});