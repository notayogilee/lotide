const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

// middle([1, 2, 31, 4, 5]);
// middle([21, 3, 31, 6]);
// console.log(assertArraysEqual(middle([1, 2, 31, 4, 5]), [31], true)); // => should PASS
// console.log(assertArraysEqual(middle([21, 3, 31, 6]), [3, 31], true));
// // eqArrays([1, 2, 3], [1, 2, 3]);

describe('#middle', () => {
  it('returns [3, 31] for [21, 3, 31, 6]', () => {
    assert.deepEqual(middle([21, 3, 31, 6]), [3, 31]);
  }),
    it('returns [5] for [1, 5, 9]', () => {
      assert.deepEqual(middle([1, 5, 9]), [5]);
    });
})