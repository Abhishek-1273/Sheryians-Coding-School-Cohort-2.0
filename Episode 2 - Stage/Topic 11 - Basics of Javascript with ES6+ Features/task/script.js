/**
 * ==============================================================================
 * JavaScript Assignment Solutions (27-Oct-2025)
 * Sheryians Coding School - Cohort 2.0
 * Student: Abhishek
 * ==============================================================================
 */

// ==============================================================================
// 1. INTRODUCTION TO JAVASCRIPT
// ==============================================================================
console.log("--- 1. Introduction to JavaScript ---");
console.log("Document Title:", document.title);
// alert("Hello from Sheryians!");

// Q1.3: If HTML is skeleton, CSS is clothes — what is JS?
// Answer: JavaScript is the brain, nervous system, and muscles.
// It provides logic, decision-making, interactivity, and dynamic actions to the page.

// Q1.4: Example of JS usage:
// E-commerce cart updates without reloading the page, live search filter bar, modal popups.


// ==============================================================================
// 2. LINKING JAVASCRIPT FILES
// ==============================================================================
console.log("--- 2. Linking JavaScript Files ---");
// Connected via <script src="script.js"></script> before </body>
// Tested with app.js: console.log("Connected!");
// Defer keyword: <script defer src="..."></script> downloads in parallel and executes after DOM parsing.


// ==============================================================================
// 3. RUNNING JS IN BROWSER CONSOLE
// ==============================================================================
console.log("--- 3. Running JS in Browser Console ---");
console.log("2 + 2 =", 2 + 2); // 4
// alert("Hi");
// prompt("Your name?");
let city = "Bhopal";
console.log("city:", city);


// ==============================================================================
// 4. VARIABLES AND KEYWORDS (var, let, const)
// ==============================================================================
console.log("--- 4. Variables and Keywords ---");

// 1. Declare names
var a = "Harsh";
let b = "Sheryians";
const c = "School";

// 2. Try reassigning
a = "Updated"; // Allowed
b = "Updated"; // Allowed
console.log("a updated:", a);
console.log("b updated:", b);
// c = "Updated"; // ❌ Uncaught TypeError: Assignment to constant variable

// 3. Block scope test
{
    let blockScoped = "I am inside block";
    // console.log(blockScoped); // Works inside
}
// console.log(blockScoped); // ❌ Uncaught ReferenceError: blockScoped is not defined

// 5. 3 Examples where const is useful:
const PI = 3.14159;
const API_BASE_URL = "https://api.sheryians.com/v1";
const MAX_RETRY_COUNT = 3;


// ==============================================================================
// 5. LOGGING AND INTERACTION (console, alert, prompt)
// ==============================================================================
console.log("--- 5. Logging and Interaction ---");

let devName = "Abhishek";
let devAge = 21;
let devCity = "Bhopal";

console.log("Name:", devName);
console.info("Age:", devAge);
console.warn("City:", devCity);

// Helper functions for index.html interactive buttons
function testLoggingMethods() {
    console.log("console.log: Logging standard message for", devName);
    console.info("console.info: Age is", devAge);
    console.warn("console.warn: Location is", devCity);
}

function testPromptAlert() {
    let nameInput = prompt("What is your name?");
    if (nameInput) {
        alert("Welcome to Sheryians, " + nameInput + "!");
        console.log("typeof user input:", typeof nameInput); // Always "string"
    }
}

function testAgeCoercion() {
    let userAge = prompt("Enter age:");
    if (userAge !== null) {
        // Coercion test:
        console.log("Direct (userAge + 5):", userAge + 5); // String concatenation: e.g. "205"
        console.log("Math (Number(userAge) + 5):", Number(userAge) + 5); // Proper math: e.g. 25
    }
}


// ==============================================================================
// 6. WORKING WITH STRINGS
// ==============================================================================
console.log("--- 6. Working with Strings ---");

let msg = "I love Sheryians";

// 2. msg.slice(2, 6) -> Predict: "love" (indexes 2, 3, 4, 5)
console.log("msg.slice(2, 6):", msg.slice(2, 6)); // "love"

// 3. msg.split(" ") and count words
let wordsArray = msg.split(" ");
console.log("msg.split(' '):", wordsArray);
console.log("Word count:", wordsArray.length); // 3

// 4. msg.replace("love", "study at")
let replacedMsg = msg.replace("love", "study at");
console.log("Replaced:", replacedMsg); // "I study at Sheryians"

// 5. Template string example
let studentName = "Harsh";
console.log(`Hey ${studentName}, welcome to JS!`);

// 6. msg.includes("love")
console.log("Includes 'love':", msg.includes("love")); // true


// ==============================================================================
// 7. STATEMENTS AND SEMICOLONS
// ==============================================================================
console.log("--- 7. Statements and Semicolons ---");

// 1. Without semicolon (runs due to ASI):
let val1 = 10
let val2 = 20
console.log("Sum:", val1 + val2)

// 2. Combining two statements in one line without semicolon breaks:
// let p = 1 let q = 2 // ❌ SyntaxError: Unexpected identifier 'let'
let p = 1; let q = 2; // ✅ Works with semicolon

// 3. Three console.log statements without semicolons:
console.log("Line 1 without semicolon")
console.log("Line 2 without semicolon")
console.log("Line 3 without semicolon")


// ==============================================================================
// 8. COMMENTS
// ==============================================================================
// Single-line comment: Abhishek

/*
   Multi-line comment:
   This file solves all questions from the official
   Sheryians Coding School 27-Oct-2025 Assignment.
*/

// console.log("This line is hidden by a comment and will not execute!");


// ==============================================================================
// 9. EXPRESSIONS VS STATEMENTS
// ==============================================================================
console.log("--- 9. Expressions vs Statements ---");

// 5 + 10 is an expression -> evaluates to 15
// let x = 10; is a statement -> performs variable declaration

// Expression gives a value immediately.
let yCalc = (5 + 10) * 2;
console.log("let y = (5 + 10) * 2; -> Output:", yCalc); // 30

// One line difference:
// "An Expression evaluates to a concrete value, while a Statement performs an action."


// ==============================================================================
// 10. DATA TYPES
// ==============================================================================
console.log("--- 10. Data Types ---");

let age = 25;
let name = "Harsh";
let isStudent = true;
let skills = ["JS", "HTML"];
let user = { city: "Bhopal" };
let x = null;
let y;
let z = Symbol("id");

console.log("typeof age:", typeof age);             // "number"
console.log("typeof name:", typeof name);           // "string"
console.log("typeof isStudent:", typeof isStudent); // "boolean"
console.log("typeof skills:", typeof skills);       // "object"
console.log("typeof user:", typeof user);           // "object"
console.log("typeof x (null):", typeof x);          // "object" (JS legacy bug)
console.log("typeof y (undefined):", typeof y);     // "undefined"
console.log("typeof z (Symbol):", typeof z);        // "symbol"

// Dynamic typing change:
age = "twenty five";
console.log("Changed typeof age:", typeof age);     // "string"

// Adding number and string:
console.log("25 + '5':", 25 + "5"); // "255" (String concatenation)


// ==============================================================================
// 11. SPECIAL VALUES
// ==============================================================================
console.log("--- 11. Special Values ---");

console.log("1 / 0 =", 1 / 0);               // Infinity
console.log("0 / 0 =", 0 / 0);               // NaN
console.log("Number('abc') =", Number("abc")); // NaN
console.log("undefined + 1 =", undefined + 1); // NaN

// Null vs Undefined in one line:
// "undefined means declared but unassigned (system default), while null is an intentional empty value (developer choice)."


// ==============================================================================
// 12. PRIMITIVE VS REFERENCE
// ==============================================================================
console.log("--- 12. Primitive vs Reference ---");

// 1. Primitive Test (Copy by Value):
let primX = 5;
let primY = primX;
primY = 10;
console.log("Primitive primX, primY:", primX, primY); // 5 10 (primX remains unchanged)

// 2. Reference Test (Copy by Reference):
let obj1 = { name: "Harsh" };
let obj2 = obj1;
obj2.name = "Sheryians";
console.log("Reference obj1.name:", obj1.name); // "Sheryians" (Both point to same memory address!)

// Observation:
// Objects change together because they share the same memory reference in Heap.
// Primitives do not change together because each has its own independent value slot in Stack.
