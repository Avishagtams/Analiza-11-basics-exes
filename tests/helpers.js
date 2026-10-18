// Test helper - students do not need to read or change this file.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const MAIN = path.join(__dirname, '..', 'main.js');
// a line like:  let number = 58423; // INPUT
const INPUT_LINE = /^(\s*(?:let|const|var)\s+[A-Za-z_$][\w$]*\s*=\s*)[^;\n]*?(;?[ \t]*\/\/[ \t]*INPUT.*)$/gm;

function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '').replace(/\s\/\/.*$/gm, '');
}

// Runs main.js with the given input values (replacing the "// INPUT" lines)
// and returns everything it printed with console.log.
function run(inputs = []) {
  let source = fs.readFileSync(MAIN, 'utf8');
  const found = source.match(INPUT_LINE) || [];
  if (found.length !== inputs.length) {
    throw new Error(
      `main.js should have exactly ${inputs.length} line(s) ending with "// INPUT" ` +
      `(for example: let number = 5; // INPUT), but found ${found.length}. Did you delete or change them?`
    );
  }
  let i = 0;
  source = source.replace(INPUT_LINE, (_, before, after) => `${before}${inputs[i++]}${after}`);

  const lines = [];
  const log = (...args) => lines.push(args.map(String).join(' '));
  const sandbox = { console: { log, info: log } };
  try {
    vm.runInNewContext(source, sandbox, { timeout: 2000 });
  } catch (err) {
    if (err && err.code === 'ERR_SCRIPT_EXECUTION_TIMEOUT') {
      throw new Error('main.js ran for more than 2 seconds - do you have an infinite loop?');
    }
    throw err;
  }
  return { lines, output: lines.join('\n'), code: stripComments(fs.readFileSync(MAIN, 'utf8')) };
}

// all the numbers that appear in the printed text, e.g. "Largest is 9" -> [9]
function numbersIn(text) {
  return (text.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
}

module.exports = { run, numbersIn };
