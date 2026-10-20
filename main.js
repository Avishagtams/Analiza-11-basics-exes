// Task 3: Find the Largest of 5 Numbers (No Arrays)
// set variable to the user 5 times for numbers. Store each in its own variable. Print the largest.
// No arrays allowed.

let first = 3; // INPUT
let second = 9; // INPUT
let third = 2; // INPUT
let fourth = 7; // INPUT
let fifth = 5; // INPUT


// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

let bigest=first;

if(bigest<second){
    bigest=second;
}
if(bigest<third){
    bigest=third;
}
if(bigest<fourth){
    bigest=fourth;
}
if(bigest<fifth){
    bigest=fifth;
}

console.log(bigest)
