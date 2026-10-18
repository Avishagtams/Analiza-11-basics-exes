const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

const cases = [[121, true], [123, false], [454, true], [100, false], [999, true], [120, false]];
for (const [n, isPalindrome] of cases) {
  const expected = isPalindrome ? 'Palindrome' : 'Not a Palindrome';
  test(`task 8: ${n} -> ${expected}`, () => {
    const { lines } = run([n]);
    assert.deepEqual(lines.map((l) => l.trim()).filter(Boolean), [expected]);
  });
}
