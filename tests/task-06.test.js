const { test } = require('node:test');
const assert = require('node:assert/strict');
const { run, numbersIn } = require('./helpers');

const cases = [[1234, '4321'], [9876, '6789'], [5021, '1205'], [1111, '1111']];
for (const [n, reversed] of cases) {
  test(`task 6: ${n} reversed is ${reversed}`, () => {
    const { output } = run([n]);
    assert.equal(output.replace(/\D/g, ''), reversed, `main.js printed: ${JSON.stringify(output)}`);
  });
}

test('task 6: no string methods (use division / modulus)', () => {
  const { code } = run([1234]);
  const forbidden = /\.\s*(split|reverse|join|toString|slice|substring|substr|charAt|padStart|padEnd|concat|repeat)\s*\(|\bString\s*\(/;
  assert.ok(!forbidden.test(code), 'this task must be solved with division / modulus only');
});
