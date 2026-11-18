// ==============================================================================
// Topic 11: Basics of JavaScript with ES6+ Features
// Sheryians Coding School - Cohort 2.0
// Author: Abhishek
// ==============================================================================

// ==========================================
// 1. Comments in JavaScript
// ==========================================
// Ye single-line comment hai

/*
   Ye multi-line comment hai
   Jisme hum multiple lines me code ko explain kar sakte hain
*/


// ==========================================
// 2. Statements and Semicolons in JS
// ==========================================
// Statement: Har ek complete instruction jo koi action leti hai
var score = 100;       // Statement 1
score = score + 20;    // Statement 2: Semicolon lagana best practice hai
console.log(score);    // Statement 3: Output 120


// ==========================================
// 3. Expressions vs Statements
// ==========================================
// Expression: Code ka wo tukda jo koi VALUE banata hai
var expressionValue = 10 + 20; // '10 + 20' expression hai (value 30 banti hai)
var isAdult = 18 >= 18;        // '18 >= 18' expression hai (value true banti hai)

// Statement: Poori line jo instruction execute karti hai
if (isAdult) {
    console.log("Allowed to vote");
}


// ==========================================
// 4. Variables & Keywords (var, let, const)
// ==========================================
// var (Legacy ES5) - Re-declare bhi hota hai, re-assign bhi hota hai
var city = "Bhopal";
var city = "Indore"; // Re-declaration allowed
city = "Delhi";      // Re-assignment allowed
console.log(city);

// let (Modern ES6) - Re-declare nahi ho sakta, sirf re-assign hota hai
let points = 50;
// let points = 60; // ❌ Error: Cannot redeclare block-scoped variable
points = 60;        // ✅ Allowed
console.log(points);

// const (Modern ES6) - Na re-declare hoga, na value change hogi
const PI = 3.14159;
// PI = 3.15; // ❌ TypeError: Assignment to constant variable
console.log(PI);


// ==========================================
// 5. Variable Hoisting in JavaScript
// ==========================================
// var hoisting - declaration top par move ho jati hai with 'undefined'
console.log(hoistedVar); // Output: undefined (Error nahi aayega)
var hoistedVar = "I am hoisted!";

// let & const hoisting - TDZ (Temporal Dead Zone) me rehte hain
// console.log(hoistedLet); // ❌ ReferenceError: Cannot access before initialization
let hoistedLet = "I am in TDZ until declared";


// ==========================================
// 6. Logging & User Dialogs
// ==========================================
console.log("General logging message");
console.info("Informational message");
console.warn("Warning highlight message");

// alert("Welcome to Topic 11!");
// var user = prompt("Apna naam enter karo:");
// console.log("User entered:", user);


// ==========================================
// 7. JavaScript Data Types (Primitive vs Relative/Reference)
// ==========================================

// --- PRIMITIVE DATA TYPES (Call by Value) ---
var intNum = 42;                 // Number (Integer)
var floatNum = 3.14159;          // Float (JS me decimal bhi 'number' type hi hota hai)
var text = "Hello Cohort";       // String
var isEnrolled = true;           // Boolean
var emptyDabba = null;           // Null (intentional empty value)
var notAssigned;                 // Undefined (declared but no value)
var uniqueId = Symbol("id");     // Symbol (unique identifier)
var bigNumber = 9007199254740991n; // BigInt (large integers)

console.log("typeof 42:", typeof intNum);           // "number"
console.log("typeof 3.14:", typeof floatNum);       // "number" (Floats are also numbers in JS)
console.log("typeof text:", typeof text);           // "string"
console.log("typeof boolean:", typeof isEnrolled);   // "boolean"
console.log("typeof null:", typeof emptyDabba);     // "object" (Legacy JS bug!)
console.log("typeof undefined:", typeof notAssigned); // "undefined"
console.log("typeof Symbol:", typeof uniqueId);     // "symbol"
console.log("typeof BigInt:", typeof bigNumber);    // "bigint"

// Primitive Copy Behavior (Direct Value Copy - Stack Memory):
var p1 = 10;
var p2 = p1; // p2 ko p1 ki nayi copy mili
p2 = 20;     // p2 change kiya
console.log("Primitive p1:", p1); // 10 (p1 bilkul safe hai!)

// --- RELATIVE / REFERENCE DATA TYPES (Call by Reference) ---
// Inhe Relative/Reference kehte hain kyunki ye value direct store karne ke bajaye memory address se relate karte hain.
var arr = ["HTML", "CSS", "JS"]; // Array
var student = {                  // Object
    name: "Abhishek",
    course: "Cohort 2.0"
};

// Reference Copy Behavior (Memory Address Copy - Heap Memory):
var ref1 = [1, 2, 3];
var ref2 = ref1; // Address copy hua
ref2.push(4);    // ref2 me add kiya
console.log("Reference ref1:", ref1); // [1, 2, 3, 4] (ref1 bhi change ho gaya!)


// ==========================================
// 8. Some Important Values (undefined, null, NaN, Infinity)
// ==========================================
var a;
console.log(a); // undefined (Declare kiya par value assign nahi ki)

var b = null;
console.log(b); // null (Explicitly empty value)

console.log("Sheryians" * 5); // NaN (Not a Number - Invalid math calculation)
console.log(100 / 0);          // Infinity (Division by zero)

// Important interview comparison:
console.log(undefined == null);  // true  (loose equality)
console.log(undefined === null); // false (strict equality: type alag hai)


// ==========================================
// 9. Working with Strings & Core Methods
// ==========================================
var str = "Sheryians Coding School";

// slice(start, end)
console.log(str.slice(0, 9)); // "Sheryians"

// template string (ES6 backticks ``)
var devName = "Abhishek";
var greeting = `Namaste ${devName}, welcome to Cohort!`;
console.log(greeting);

// split(separator)
console.log(str.split(" ")); // ["Sheryians", "Coding", "School"]

// replace(old, new)
console.log(str.replace("Coding", "Development")); // "Sheryians Development School"

// includes(search)
console.log(str.includes("Coding")); // true

// NOTE ON splice():
// Strings par splice() nahi hota! Strings immutable hoti hain.
// splice() strictly Arrays ka method hota hai.


// ==========================================
// 10. Basic Operators in JavaScript
// ==========================================

// 1. Arithmetic Operators: +, -, *, /, %, **
console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1 (Modulus / Remainder)
console.log(2 ** 3);  // 8 (Exponentiation: 2 ki power 3)

// 2. Assignment Operators: =, +=, -=, *=, /=
var n = 10;
n += 5; // n = n + 5 -> 15
console.log("Assignment +=:", n);

// 3. Increment & Decrement: ++, --
var count = 5;
console.log(count++); // 5 (Post-increment: pehle print hua, phir badha)
console.log(count);   // 6
console.log(++count); // 7 (Pre-increment: pehle badha, phir print hua)

// 4. Comparison Operators: == vs ===, !=, !==, >, <, >=, <=
console.log(5 == "5");   // true  (Loose equality: type convert ho jata hai)
console.log(5 === "5");  // false (Strict equality: value & data type dono check hote hain)
console.log(10 > 5);     // true

// 5. Logical Operators: && (AND), || (OR), ! (NOT)
console.log(true && false); // false (Dono true hone chahiye)
console.log(true || false); // true  (Koi ek bhi true ho toh true)
console.log(!true);         // false (Reverse / Invert)

// 6. Bitwise Operators: &, |, ^, ~, <<, >>
console.log(5 & 1); // 1 (Binary bits: 0101 & 0001 = 0001)
console.log(5 | 1); // 5 (Binary bits: 0101 | 0001 = 0101)
