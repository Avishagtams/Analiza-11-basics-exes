const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

const cases = [[58423, 22], [11111, 5], [99999, 45], [10001, 2]];
for (const [n, sum] of cases) {
  test(`task 1: digits of ${n} sum to ${sum}`, () => {
    const { lines } = run([n]);
    assert.ok(
      lines.some((l) => l.trim() === `Sum is ${sum}`),
      `expected a printed line "Sum is ${sum}", but main.js printed: ${JSON.stringify(lines)}`
    );
  });
}
