/**
 * ==============================================================================
 * Topic 11: Basics of JavaScript with ES6+ Features
 * Sheryians Coding School - Cohort 2.0
 * Author: Abhishek
 * Sequence: Chronological Lecture Order (1 to 15)
 * ==============================================================================
 */

// ==========================================
// 01. Introduction to JavaScript
// ==========================================
console.log("Topic 11: Basics of JavaScript Linked Successfully!");
// HTML = Skeleton, CSS = Clothes, JS = Brain & Nervous System


// ==========================================
// 02. Linking JS & 03. Running in Console
// ==========================================
console.log("2 + 2 =", 2 + 2); // 4
console.log("Current document title:", document.title);
let currentCity = "Bhopal";
console.log("currentCity:", currentCity);


// ==========================================
// 04. Variables & Keywords (var, let, const)
// ==========================================
// var (Legacy ES5) - Re-declare aur re-assign dono allowed
var a = 10;
var a = 20; // Re-declaration allowed
a = 30;     // Re-assignment allowed
console.log("var a:", a);

// let (Modern ES6) - Re-declare nahi ho sakta, sirf re-assign hota hai
let b = 50;
// let b = 60; // ❌ Error: Cannot redeclare block-scoped variable 'b'
b = 60;        // ✅ Re-assignment allowed
console.log("let b:", b);

// const (Modern ES6) - Na re-declare hoga, na value change hogi
const PI = 3.14159;
// PI = 3.15; // ❌ TypeError: Assignment to constant variable
console.log("const PI:", PI);


// ==========================================
// 05. Logging & User Dialogs
// ==========================================
console.log("Standard console.log message");
console.info("Informational message via console.info");
console.warn("Warning highlight via console.warn");

// alert("Hello from Sheryians!");
// var userName = prompt("Apna naam enter karo:");
// console.log("User entered:", userName);


// ==========================================
// 06. Working with Strings & Core Methods
// ==========================================
var str = "Sheryians Coding School";

// 1. slice(start, end)
console.log(".slice(0, 9):", str.slice(0, 9)); // "Sheryians"

// 2. Template Strings (ES6 Backticks ``)
var student = "Abhishek";
var course = "Cohort 2.0";
console.log(`Hello ${student}, welcome to ${course}!`);

// 3. split(separator)
console.log(".split(' '):", str.split(" ")); // ["Sheryians", "Coding", "School"]

// 4. replace(old, new)
console.log(".replace():", str.replace("Coding", "Development")); // "Sheryians Development School"

// 5. includes(search)
console.log(".includes('Coding'):", str.includes("Coding")); // true

// NOTE ON splice():
// Strings immutable hoti hain, isliye strings par splice() exist nahi karta!
// splice() strictly Arrays ka method hota hai.


// ==========================================
// 07. Statements and Semicolons
// ==========================================
// Statement: Poori instruction jo koi action leti hai
var score = 100;    // Statement 1
score = score + 20; // Statement 2: Semicolon lagana best practice hai
console.log("Final score statement:", score);


// ==========================================
// 08. Comments in JavaScript
// ==========================================
// Ye single-line comment hai

/* 
   Ye multi-line comment hai
   Jisme hum detail me code explain karte hain
*/


// ==========================================
// 09. Expressions vs Statements
// ==========================================
// Expression: Code ka har wo tukda jo execute hokar VALUE produce kare
var expResult = 10 + 20; // '10 + 20' expression hai (value 30 banti hai)
var isAdult = 18 >= 18;  // '18 >= 18' expression hai (value true banti hai)

// Statement: Action instruction
if (isAdult) {
    console.log("Statement executed: Allowed to vote");
}


// ==========================================
// 10. JavaScript Data Types (typeof Audit)
// ==========================================
var intNum = 42;                    // Number (Integer)
var floatNum = 3.14159;             // Float (JS me decimal bhi 'number' type hi hota hai)
var text = "Hello Cohort";          // String
var isEnrolled = true;              // Boolean
var emptyDabba = null;              // Null (intentional empty value)
var notAssigned;                    // Undefined (declared but no value)
var uniqueId = Symbol("id");        // Symbol (unique identifier)
var bigNumber = 9007199254740991n;  // BigInt (large integers)
var arr = ["HTML", "CSS", "JS"];    // Array
var userObj = { name: "Abhishek" }; // Object

console.log("typeof 42:", typeof intNum);               // "number"
console.log("typeof 3.14:", typeof floatNum);           // "number" (Floats are numbers in JS)
console.log("typeof text:", typeof text);               // "string"
console.log("typeof boolean:", typeof isEnrolled);       // "boolean"
console.log("typeof null:", typeof emptyDabba);         // "object" (Legacy JS bug!)
console.log("typeof undefined:", typeof notAssigned);   // "undefined"
console.log("typeof Symbol:", typeof uniqueId);         // "symbol"
console.log("typeof BigInt:", typeof bigNumber);        // "bigint"
console.log("typeof array:", typeof arr);               // "object"
console.log("typeof object:", typeof userObj);          // "object"


// ==========================================
// 11. Primitive vs Relative (Reference) Types
// ==========================================
// 1. Primitive Type (Copy by Value in Stack):
var p1 = 10;
var p2 = p1; // p2 ko p1 ki nayi copy mili
p2 = 20;
console.log("Primitive p1:", p1); // 10 (p1 bilkul safe hai!)

// 2. Relative / Reference Type (Copy by Reference in Heap):
var ref1 = [1, 2, 3];
var ref2 = ref1; // Address share hua
ref2.push(4);
console.log("Reference ref1:", ref1); // [1, 2, 3, 4] (dono change ho gaye!)


// ==========================================
// 12. Some Important Special Values
// ==========================================
console.log("1 / 0 =", 1 / 0);               // Infinity
console.log("0 / 0 =", 0 / 0);               // NaN (Not a Number)
console.log("Number('abc') =", Number("abc")); // NaN
console.log("undefined + 1 =", undefined + 1); // NaN

// Important interview comparison:
console.log("undefined == null:", undefined == null);   // true  (loose equality)
console.log("undefined === null:", undefined === null); // false (strict equality: type alag hai)


// ==========================================
// 13. Variable Hoisting & TDZ
// ==========================================
// var hoisting: Hoisted + initialized as undefined
console.log("var before declaration:", hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted!";
console.log("var after declaration:", hoistedVar);  // Output: "I am hoisted!"

// let & const hoisting: Hoisted par uninitialized (TDZ me locked rehte hain)
// console.log(hoistedLet); // ❌ ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am in TDZ until declared";
const hoistedConst = "Constant in TDZ until declared";


// ==========================================
// 14. Basic Operators in JavaScript
// ==========================================
// Arithmetic: +, -, *, /, %, **
console.log(10 + 5);  // 15
console.log(10 % 3);  // 1 (Remainder)
console.log(2 ** 3);  // 8 (2 ki power 3)

// Assignment: =, +=, -=, *=, /=
var n = 10;
n += 5;
console.log("Assignment +=:", n); // 15

// Increment & Decrement: ++, --
var count = 5;
console.log(count++); // 5 (Post-increment)
console.log(count);   // 6
console.log(++count); // 7 (Pre-increment)

// Comparison: == vs ===, !=, !==, >, <, >=, <=
console.log(5 == "5");   // true  (Loose check)
console.log(5 === "5");  // false (Strict check)

// Logical: &&, ||, !
console.log(true && false); // false
console.log(true || false); // true

// String Operators: + (concatenation), += (append)
var greeting = "Namaste, " + "Sheryians";
greeting += "!";
console.log(greeting);

// Ternary Operator (? :)
var ageCheck = 20;
var canVote = ageCheck >= 18 ? "Eligible" : "Not Eligible";
console.log("Ternary Result:", canVote);

// Type Checking: typeof, instanceof
console.log(typeof 100);               // "number"
console.log(arr instanceof Array);     // true (instanceof prototype check)

// Bitwise Operators: &, |, ^, ~, <<, >>
console.log(5 & 1); // 1


// ==========================================
// 15. Modern ES6+ Operators (Spread, Rest, ??, ?.)
// ==========================================
// 1. Spread Operator (...) -> Unpacking / Expanding
var orig = [1, 2, 3];
var expanded = [...orig, 4, 5];
console.log("Spread Array:", expanded); // [1, 2, 3, 4, 5]

var devObj = { name: "Abhishek", role: "Developer" };
var fullDev = { ...devObj, city: "Bhopal" };
console.log("Spread Object:", fullDev);

// 2. Rest Parameter (...) -> Packing / Gathering
function calculateTotalSum(...nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log("Rest sum(10, 20, 30):", calculateTotalSum(10, 20, 30)); // 60

// 3. Nullish Coalescing Operator (??)
var userScore = 0; // 0 valid value hai
console.log("Score with OR (||):", userScore || 50); // 50 (Bug: 0 is ignored!)
console.log("Score with Nullish (??):", userScore ?? 50); // 0 (Correct: 0 is preserved!)

// 4. Optional Chaining Operator (?.)
var studentObj = {
    name: "Harsh",
    cohortDetails: {
        batch: "Cohort 2.0"
        // address property missing hai
    }
};
console.log("Safe Optional Chaining:", studentObj?.address?.city); // undefined (No crash!)
