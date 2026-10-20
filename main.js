// Task 1: Sum All Digits of a 5-Digit Number
// save a 5 digit number in a variable. Calculate and print the sum of its digits.
// Example: Input: 58423 -> Output: Sum is 22


// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

let number = 58423; // INPUT
let digit=0;
let sum=0;
for (let i = 0; i < 5; i++) {
    digit=number%10;
    number=Math.floor(number/10);
    sum+=digit;
  }

  console.log(`Sum is ${sum}`);