/**
 * ==============================================================================
 * JavaScript Assignment Solutions (29-Oct-2025)
 * Sheryians Coding School - Cohort 2.0
 * Student: Abhishek
 * ==============================================================================
 */

// ==============================================================================
// PART 1: BASIC OPERATORS
// ==============================================================================
console.log("=== PART 1: BASIC OPERATORS ===");

// (a) Arithmetic Operators
let a = 10;
let b = 3;
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.3333333333333335
console.log("a % b =", a % b); // 1 (Remainder)

// (b) Assignment Operators
let x = 5;
x += 3; // x = x + 3 -> 8
console.log("x += 3 ->", x);
x -= 3; // x = x - 3 -> 5
console.log("x -= 3 ->", x);
x *= 3; // x = x * 3 -> 15
console.log("x *= 3 ->", x);
x /= 3; // x = x / 3 -> 5
console.log("x /= 3 ->", x);

// (c) Increment / Decrement
let count = 5;
console.log("count++ at execution:", count++); // Logs 5 (Post-increment: pehle use kiya)
console.log("count after increment:", count);   // Now 6

console.log("count-- at execution:", count--); // Logs 6 (Post-decrement: pehle use kiya)
console.log("count after decrement:", count);   // Now 5

// (d) Comparison: Loose vs Strict Equality
console.log("5 == '5' :", 5 == "5");   // true  (Type coercion: string number me convert ho gaya)
console.log("5 === '5':", 5 === "5");  // false (Strict check: number !== string)

// (e) Combined Comparison
let isConditionMet = (10 > 5) && (10 < 20) && (10 === 10);
console.log("10 > 5 && 10 < 20 && 10 === 10:", isConditionMet); // true

// (f) Logical Operators
console.log("true && false :", true && false); // false
console.log("true || false :", true || false); // true
console.log("!(true)       :", !(true));       // false

// (g) Predict Results
console.log("5 > 3 && 10 > 8:", 5 > 3 && 10 > 8); // true && true -> true
console.log("5 > 3 || 10 < 8:", 5 > 3 || 10 < 8); // true || false -> true

// (h) Bitwise Operators (5 = 101, 1 = 001)
console.log("5 & 1 (Bitwise AND):", 5 & 1); // 1 (001)
console.log("5 | 1 (Bitwise OR) :", 5 | 1); // 5 (101)


// ==============================================================================
// PART 2: VARIABLE HOISTING IN JAVASCRIPT
// ==============================================================================
console.log("\n=== PART 2: VARIABLE HOISTING ===");

// (a) var Hoisting:
console.log("var a before declaration:", hoistedVarA); // undefined
var hoistedVarA = 10;
console.log("var a after declaration:", hoistedVarA);   // 10

// (b) let Hoisting (Temporal Dead Zone):
// console.log(hoistedLetB); // ❌ Uncaught ReferenceError: Cannot access 'hoistedLetB' before initialization
let hoistedLetB = 10;
console.log("let b after declaration:", hoistedLetB);   // 10

// (c) Function Declaration Hoisting:
testFunction(); // Output: "Hello" (Functions fully hoist hote hain!)
function testFunction() {
    console.log("Function Declaration: Hello");
}

// (d) Function Expression Trap:
// helloFunc(); // ❌ TypeError: helloFunc is not a function!
var helloFunc = function() {
    console.log("Function Expression: Hi");
};
// Reason: helloFunc var se bana hai, toh memory phase me wo sirf 'undefined' bankar hoist hua.
// Isliye helloFunc() asal me undefined() execute karne ki koshish karta hai!

// (e) What gets hoisted?
// Function declarations get fully hoisted with code body.
// Variables only get partially hoisted (var as undefined, let/const in TDZ).


// ==============================================================================
// PART 3: CONDITIONAL OPERATORS
// ==============================================================================
console.log("\n=== PART 3: CONDITIONAL OPERATORS ===");

// (a) Age Check
let age = 18;
if (age >= 18) {
    console.log("Age check (18): Adult");
} else {
    console.log("Age check (18): Minor");
}

// (b) Marks Grading
let marks = 85;
if (marks >= 90) {
    console.log("Marks 85: A grade");
} else if (marks >= 75) {
    console.log("Marks 85: B grade"); // Matches!
} else if (marks >= 50) {
    console.log("Marks 85: C grade");
} else {
    console.log("Marks 85: Fail");
}

// (c) City Matcher
let city = "Bhopal";
if (city === "Bhopal") {
    console.log("City Bhopal: MP");
} else if (city === "Delhi") {
    console.log("City Delhi: Capital");
} else {
    console.log("City: Unknown City");
}

// (d) Score Ternary
let score = 40;
let examResult = score >= 35 ? "Pass" : "Fail";
console.log("Score 40 Ternary Result:", examResult); // "Pass"

// (e) Temperature Ternary
let temperature = 32;
let weather = temperature > 30 ? "Hot" : "Pleasant";
console.log("Temperature 32 Ternary:", weather); // "Hot"

// (f) Switch Case
let dayNum = 3;
switch (dayNum) {
    case 1: console.log("Day: Monday"); break;
    case 2: console.log("Day: Tuesday"); break;
    case 3: console.log("Day: Wednesday"); break;
    case 4: console.log("Day: Thursday"); break;
    case 5: console.log("Day: Friday"); break;
    case 6: console.log("Day: Saturday"); break;
    case 7: console.log("Day: Sunday"); break;
    default: console.log("Day: Invalid Day"); break;
}

// (g) Voter Eligibility with Logical AND
let voterAge = 20;
let voterCountry = "India";
if (voterAge >= 18 && voterCountry === "India") {
    console.log("Voter check: Eligible for Vote");
} else {
    console.log("Voter check: Not Eligible");
}


// ==============================================================================
// HELPER FUNCTIONS FOR INTERACTIVE BUTTONS
// ==============================================================================
function testArithmetic() {
    console.log("--- Interactive Arithmetic Test (a=10, b=3) ---");
    console.log("10 + 3 =", 10 + 3);
    console.log("10 - 3 =", 10 - 3);
    console.log("10 * 3 =", 10 * 3);
    console.log("10 / 3 =", 10 / 3);
    console.log("10 % 3 =", 10 % 3);
}

function testIncrement() {
    let testCount = 5;
    console.log("Initial count:", testCount);
    console.log("Logging testCount++:", testCount++); // 5
    console.log("Value after testCount++:", testCount); // 6
}

function testBitwise() {
    console.log("Bitwise AND (5 & 1):", 5 & 1); // 1
    console.log("Bitwise OR (5 | 1) :", 5 | 1); // 5
}

function testAgePrompt() {
    let inputAge = prompt("Enter your age:", "18");
    if (inputAge !== null) {
        let numericAge = Number(inputAge);
        if (numericAge >= 18) {
            alert("Status: Adult (Age: " + numericAge + ")");
            console.log("Age check result: Adult");
        } else {
            alert("Status: Minor (Age: " + numericAge + ")");
            console.log("Age check result: Minor");
        }
    }
}

function testGradePrompt() {
    let inputMarks = prompt("Enter student marks (0-100):", "82");
    if (inputMarks !== null) {
        let m = Number(inputMarks);
        let grade = "";
        if (m >= 90) grade = "A grade";
        else if (m >= 75) grade = "B grade";
        else if (m >= 50) grade = "C grade";
        else grade = "Fail";
        alert("Result for marks " + m + ": " + grade);
        console.log("Grade result:", grade);
    }
}

function testDayPrompt() {
    let inputDay = prompt("Enter day number (1 to 7):", "3");
    if (inputDay !== null) {
        let d = Number(inputDay);
        let dayName = "";
        switch (d) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid Day"; break;
        }
        alert("Day " + d + " is: " + dayName);
        console.log("Switch result for day " + d + ":", dayName);
    }
}
