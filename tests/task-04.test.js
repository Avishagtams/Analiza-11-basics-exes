const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

const cases = [[10045, 5], [7, 1], [99, 2], [1000, 4], [123456789, 9]];
for (const [n, count] of cases) {
  test(`task 4: ${n} has ${count} digit(s)`, () => {
    const { output } = run([n]);
    assert.deepEqual(numbersIn(output), [count], `main.js printed: ${JSON.stringify(output)}`);
  });
}
