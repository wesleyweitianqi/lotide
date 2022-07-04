
const tail  = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return original array element numbers', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.equal(words.length, 3);
  });

  it('shoudl return empty array if an Array with only one element', () => {
    const words = [2];
    tail(words);
    assert.equal(words.length, 1);
    assert.equal(tail(words).length,0);
  });
});





// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!