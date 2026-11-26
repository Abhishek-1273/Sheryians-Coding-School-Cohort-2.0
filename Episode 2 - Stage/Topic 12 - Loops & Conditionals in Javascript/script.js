/**
 * ==============================================================================
 * Topic 12: Loops & Conditionals in JavaScript
 * Sheryians Coding School - Cohort 2.0
 * Author: Abhishek
 * ==============================================================================
 */

// ==========================================
// 01. Conditionals: if, else, else-if
// ==========================================
console.log("--- 01. Conditionals (if, else, else-if) ---");

let marks = 82;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A (Marks: 82)"); // Matches & executes!
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: Needs Improvement");
}


// ==========================================
// 02. Ternary Operator (? :)
// ==========================================
console.log("--- 02. Ternary Operator ---");

let userAge = 20;
let votingStatus = userAge >= 18 ? "Eligible to Vote" : "Minor";
console.log("Voting Status:", votingStatus); // "Eligible to Vote"

// Chained Ternary
let temperature = 32;
let weather = temperature > 35 ? "Hot" : temperature > 20 ? "Pleasant" : "Cold";
console.log("Weather:", weather); // "Pleasant"


// ==========================================
// 03. Switch Statement & Fallthrough
// ==========================================
console.log("--- 03. Switch Statement ---");

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Day: Monday");
        break;
    case 2:
        console.log("Day: Tuesday");
        break;
    case 3:
        console.log("Day: Wednesday"); // Matches & executes!
        break;
    case 4:
        console.log("Day: Thursday");
        break;
    case 5:
        console.log("Day: Friday");
        break;
    default:
        console.log("Day: Weekend!");
        break;
}


// ==========================================
// 04. Truthy & Falsy Values
// ==========================================
console.log("--- 04. Truthy & Falsy Values ---");

// 7 Falsy values: false, 0 (-0, 0n), "", null, undefined, NaN, document.all
if ("") {
    console.log("Won't run");
} else {
    console.log('"" (empty string) is Falsy!');
}

if ("0") {
    console.log('"0" is a non-empty string -> Truthy!');
}

if ([]) {
    console.log("Empty array [] -> Truthy!");
}

console.log("Boolean(0):", Boolean(0));               // false
console.log("Boolean(NaN):", Boolean(NaN));           // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log('Boolean("false"):', Boolean("false"));   // true


// ==========================================
// 05. for Loop in JavaScript
// ==========================================
console.log("--- 05. for Loop ---");

for (let i = 1; i <= 3; i++) {
    console.log("for loop counter i:", i);
}


// ==========================================
// 06. while Loop (Entry-Controlled)
// ==========================================
console.log("--- 06. while Loop ---");

let wCount = 1;
while (wCount <= 3) {
    console.log("while loop wCount:", wCount);
    wCount++;
}


// ==========================================
// 07. do...while Loop (Exit-Controlled)
// ==========================================
console.log("--- 07. do...while Loop ---");

let dNum = 10;
do {
    // Condition false hone par bhi kam se kam 1 bar execute hoga!
    console.log("do...while executed at least once with dNum:", dNum);
    dNum++;
} while (dNum < 5);


// ==========================================
// 08. forEach Array Iteration
// ==========================================
console.log("--- 08. forEach Loop ---");

const webSkills = ["HTML", "CSS", "JavaScript", "SASS"];

webSkills.forEach(function(skill, index) {
    console.log(`forEach [${index}]: ${skill}`);
});


// ==========================================
// 09. for...in Loop (Iterating Objects)
// ==========================================
console.log("--- 09. for...in Loop (Objects) ---");

const studentProfile = {
    name: "Abhishek",
    cohort: "2.0",
    city: "Bhopal",
    role: "Frontend Developer"
};

for (let prop in studentProfile) {
    console.log(`Key: ${prop} | Value: ${studentProfile[prop]}`);
}


// ==========================================
// 10. for...of Loop (Iterating Values)
// ==========================================
console.log("--- 10. for...of Loop (Values) ---");

const frameworks = ["React", "Vue", "Node"];
for (let fw of frameworks) {
    console.log("Framework:", fw);
}

// Iterating over String characters:
for (let ch of "JS") {
    console.log("Char:", ch);
}


// ==========================================
// 11. Loop Controls: break & continue
// ==========================================
console.log("--- 11. break and continue ---");

// break: terminates loop immediately
for (let b = 1; b <= 5; b++) {
    if (b === 3) {
        console.log("Breaking loop at b =", b);
        break;
    }
    console.log("break demo b:", b);
}

// continue: skips current iteration and moves to next
for (let c = 1; c <= 5; c++) {
    if (c === 3) {
        console.log("Skipping iteration at c =", c);
        continue;
    }
    console.log("continue demo c:", c);
}


// ==========================================
// 12. Recursion in JavaScript
// ==========================================
console.log("--- 12. Recursion ---");

// Example 1: Countdown
function countDown(n) {
    // Base Case (Rukne ka rule)
    if (n <= 0) {
        console.log("Recursion: Liftoff!");
        return;
    }
    console.log("Countdown:", n);
    // Recursive Step
    countDown(n - 1);
}
countDown(3);

// Example 2: Factorial of a number (5! = 120)
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1);       // Recursive call
}
console.log("Factorial of 5:", factorial(5)); // 120
