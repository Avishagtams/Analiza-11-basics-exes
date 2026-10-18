const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

function collatz(n) {
  const steps = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    steps.push(n);
  }
  return steps;
}

for (const n of [6, 7, 8, 12, 27]) {
  test(`task 10: Collatz steps of ${n}`, () => {
    const { output } = run([n]);
    const printed = numbersIn(output);
    const full = collatz(n);
    // printing the starting number is optional, the sequence must end with 1
    const ok = JSON.stringify(printed) === JSON.stringify(full) || JSON.stringify(printed) === JSON.stringify(full.slice(1));
    assert.ok(ok, `expected ${full.join(', ')} (starting number optional), but main.js printed: ${JSON.stringify(output)}`);
  });
}
