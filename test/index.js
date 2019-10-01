const withThese = require('mocha-each');
const assert = require('assert');
const clsx = require('..');
const testCases = require('./test-cases');

describe('clsx', () => {
  withThese(testCases).it(
    (expected, ...args) => `Returns '${expected}' with ${JSON.stringify(...args)}`,
    (expected, ...args) => {
      assert.strictEqual(clsx(...args), expected);
    },
  );
});
