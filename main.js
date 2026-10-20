// Task 4: Count the Digits in a Number
// set variable for a number (e.g. 10045) and count how many digits it has.
// Example: Input: 10045 -> Output: 5

let number = 10045; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

let sum=0;
while(number!=0){
    number=Math.floor(number/10);
    sum+=1;

}
console.log(sum)