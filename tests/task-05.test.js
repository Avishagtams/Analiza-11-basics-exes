const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

const cases = [
  [[2, 10], [2, 4, 6, 8, 10]],
  [[3, 9], [4, 6, 8]],
  [[1, 2], [2]],
  [[4, 4], [4]],
  [[5, 5], []],
];
for (const [[start, end], expected] of cases) {
  test(`task 5: even numbers from ${start} to ${end}`, () => {
    const { output } = run([start, end]);
    assert.deepEqual(numbersIn(output), expected, `main.js printed: ${JSON.stringify(output)}`);
  });
}
