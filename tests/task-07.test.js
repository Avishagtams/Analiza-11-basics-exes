const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

test('task 7: prints the number pyramid', () => {
  const { lines } = run([]);
  assert.deepEqual(lines.map((l) => l.trim()), ['1', '22', '333', '4444', '55555']);
});

test('task 7: uses a loop', () => {
  const { code } = run([]);
  assert.ok(/\b(for|while)\b/.test(code), 'this task must be solved with loops');
});
