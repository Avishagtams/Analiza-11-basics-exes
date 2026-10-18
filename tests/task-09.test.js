const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

for (const n of [4, 12, 1, 7]) {
  test(`task 9: multiplication table of ${n}`, () => {
    const { lines } = run([n]);
    const expected = Array.from({ length: 10 }, (_, i) => `${n} x ${i + 1} = ${n * (i + 1)}`);
    assert.deepEqual(lines.map((l) => l.trim()), expected);
  });
}
