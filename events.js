// Events are actions or occurrences that happen in the browser (like a user click, mouse move, key press, form submit, etc.) which you can respond to with event handlers.

//  2. Common Event Types
// Event Name	Description
// click	Mouse click
// mouseover	Mouse enters element
// mouseout	Mouse leaves element
// keydown	Key is pressed
// keyup	Key is released
// submit	Form submission
// input	Value change in input
// change	Input or select change
// scroll	Page or element scroll
// load	Page or resource loaded

//1.Button Click
// <button id="myBtn">Click Me</button>

// <script>
//   const btn = document.getElementById("myBtn");

//   // Attach a click event using addEventListener
  btn.addEventListener("click", () => {
    alert("Button was clicked!");
  });
// </script>

//  2.The Event Object
// The event handler receives a special object with details about the event.
btn.addEventListener("click", function(event) {
  console.log("Event Type:", event.type); // "click"
  console.log("Target Element:", event.target); // <button> element
  console.log("Mouse X:", event.clientX); // Mouse X position
});


//3. Event Bubbling and Capturing
// 📚 Event Flow:
// Capturing Phase (window → target)
// Target Phase
// Bubbling Phase (target → window)

// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

// <script>
//   // Bubbling: (default behavior)
//   document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent Clicked (Bubbling)");
//   });

//   // Capturing: useCapture = true
//   document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent Clicked (Capturing)");
//   }, true);
// </script>



//4. Stop Propagation
child.addEventListener("click", function(e) {
  e.stopPropagation(); // Prevents bubbling to parent
  console.log("Child clicked");
});

// 5.Removing Event Listeners

function handleClick() {
  alert("Clicked once");
}

// Attach
btn.addEventListener("click", handleClick);

// Remove
btn.removeEventListener("click", handleClick);


//6.  Once Option
// Runs the handler just once, then removes it:
btn.addEventListener("click", () => {
  console.log("This will run only once");
}, { once: true });


// 7.Keyboard Event

// <input id="nameInput" placeholder="Type your name" />

// <script>
//   document.getElementById("nameInput").addEventListener("keydown", (e) => {
//     console.log("Key pressed:", e.key);
//     if (e.key === "Enter") {
//       alert("You pressed Enter");
//     }
//   });
// </script>


//8.Form Submit Event
// <form id="loginForm">
//   <input type="text" placeholder="Username" required />
//   <button type="submit">Login</button>
// </form>

// <script>
//   document.getElementById("loginForm").addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent page reload
//     alert("Form submitted!");
//   });
// </script>



// 9.Delegation (Best Practice for Dynamic Content)
// Attach events to a parent instead of each child (saves memory and handles dynamic elements):

// <ul id="todoList">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>

// <script>
//   document.getElementById("todoList").addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//       alert("Clicked: " + e.target.textContent);
//     }
//   });
// </script>


//10.Custom Events
const event = new CustomEvent("greet", {
  detail: { name: "Anish" }
});

document.addEventListener("greet", (e) => {
  console.log("Hello,", e.detail.name);
});

document.dispatchEvent(event);

//Capture vs Bubble
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
  console.log("Outer clicked - BUBBLING");
}, false); // Happens AFTER inner if bubbling

outer.addEventListener("click", () => {
  console.log("Outer clicked - CAPTURING");
}, true);  // Happens BEFORE inner

inner.addEventListener("click", () => {
  console.log("Inner clicked");
}, false);

//OUTPUT
// Outer clicked - CAPTURING
// Inner clicked
// Outer clicked - BUBBLING

