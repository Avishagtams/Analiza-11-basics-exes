const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

const cases = [
  [[3, 9, 2, 7, 5], 9],
  [[1, 2, 3, 4, 5], 5],
  [[50, 20, 80, 10, 30], 80],
  [[-1, -5, -3, -2, -4], -1],
  [[7, 7, 7, 7, 7], 7],
];
for (const [values, max] of cases) {
  test(`task 3: largest of ${values.join(', ')} is ${max}`, () => {
    const { output } = run(values);
    assert.deepEqual(numbersIn(output), [max], `main.js printed: ${JSON.stringify(output)}`);
  });
}

test('task 3: no arrays allowed', () => {
  const { code } = run([1, 2, 3, 4, 5]);
  assert.ok(!/[\[\]]/.test(code), 'this task must be solved without arrays');
});
