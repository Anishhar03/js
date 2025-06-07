// The DOM (Document Object Model) is a programming interface provided by the browser that represents the HTML of a webpage as a tree structure.

// With DOM manipulation, JavaScript can create, update, delete, and respond to changes in elements dynamically.

// ==========================
// 1. Accessing DOM Elements
// ==========================

// Select element by ID (returns a single element)
const title = document.getElementById("main-title");

// Select the first matching element (query selector is flexible)
const desc = document.querySelector(".description");

// Select all matching elements (returns NodeList, can loop over)
const listItems = document.querySelectorAll("li");

// Select using tag name
const paragraphs = document.getElementsByTagName("p");

// Select using class name
const descriptions = document.getElementsByClassName("description");

// ===============================
// 2. Changing Text and HTML Content
// ===============================

// Change only the **text content**
title.textContent = "New DOM Title";

// Replace inner HTML (use with caution — vulnerable to XSS if unsafe input)
desc.innerHTML = "<strong>Changed paragraph text</strong>";

// ===================================
// 3. Changing Attributes or Adding New
// ===================================

// Set an attribute (like href, src, id, class)
title.setAttribute("class", "highlighted");

// Get an attribute
const currentClass = title.getAttribute("class");

// Remove an attribute
title.removeAttribute("class");

// =======================
// 4. Changing Styles
// =======================

// Inline style manipulation
title.style.color = "blue";
title.style.fontSize = "32px";

// Toggle classes (recommended way to style)
title.classList.add("bold-text");    // Adds class
title.classList.remove("highlighted"); // Removes class
title.classList.toggle("hidden");    // Toggles class on/off

// ============================
// 5. Creating and Appending Elements
// ============================

// Create a new element
const newItem = document.createElement("li");
newItem.textContent = "Item 2";

// Add it to the UL
const ul = document.getElementById("item-list");
ul.appendChild(newItem); // Adds at end

// Add as first child
ul.prepend(document.createElement("li")).textContent = "Item 0";

// ===========================
// 6. Removing Elements
// ===========================

// Remove a specific child
ul.removeChild(ul.children[0]); // Removes first <li>

// Remove an element directly
newItem.remove(); // Removes "Item 2"

// =============================
// 7. Event Handling (Dynamic DOM)
// =============================

// Get the button
const btn = document.getElementById("change-btn");

// Attach a click event listener
btn.addEventListener("click", () => {
  title.textContent = "Text Changed by Button Click!";
});

// You can also remove event listeners if needed
const handler = () => alert("clicked!");
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler); // Removes that specific listener

// ===================================
// 8. Looping Through NodeList or HTMLCollection
// ===================================

// NodeList supports forEach directly
listItems.forEach(item => {
  item.style.color = "green";
});

// HTMLCollection does NOT support forEach directly
Array.from(paragraphs).forEach(p => {
  p.style.fontStyle = "italic";
});

// ============================
// 9. Traversing the DOM Tree
// ============================

const firstItem = ul.firstElementChild;     // First <li>
const lastItem = ul.lastElementChild;       // Last <li>
const parent = ul.parentElement;            // Parent of UL (body)
const children = ul.children;               // HTMLCollection of children
const next = firstItem.nextElementSibling;  // Next sibling of <li>
const prev = lastItem.previousElementSibling; // Previous sibling

// =============================
// 10. Creating Fragment (Efficient Batch Insertion)
// =============================

const fragment = document.createDocumentFragment();
for (let i = 3; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
ul.appendChild(fragment); // Inserts all new items in one go

// =============================
// 11. Using Template Strings for Content
// =============================

const user = { name: "Anish", age: 21 };
const userInfo = `
  <div class="user-card">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
  </div>
`;

document.body.insertAdjacentHTML("beforeend", userInfo); // Adds HTML after <body>

// ==============================
// 12. DOMContentLoaded Event
// ==============================

// Ensures DOM is loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!");
});


//JavaScript: Convert to Array

//const listItems = document.querySelectorAll("#myList li"); // NodeList

// ✅ Method 1: Using Array.from()
const array1 = Array.from(listItems);

// ✅ Method 2: Using spread operator
const array2 = [...listItems];

// ✅ Method 3: Using Array.prototype.slice.call() (older way)
const array3 = Array.prototype.slice.call(listItems);

// Now you can use array methods like map, filter, etc.
array1.forEach(item => console.log(item.textContent));

