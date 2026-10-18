const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

for (const rows of [4, 1, 10]) {
  test(`task 2: triangle with ${rows} rows`, () => {
    const { lines } = run([rows]);
    const expected = Array.from({ length: rows }, (_, i) => '*'.repeat(i + 1));
    assert.deepEqual(lines.map((l) => l.trim()), expected);
  });
}
