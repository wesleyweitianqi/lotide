
const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return [] if elements less than 3', () => {
    const array = [1];
    assert.deepEqual(middle(array), []);
  });

  it('should return [2] if given array is [1,2,3]', () => {
    const array = [1,2,3];
    assert.deepEqual(middle(array), [2]);
  });

  it('should return 2 middle numbers if array length is even', () => {
    const array = [1,2,3,4];
    assert.deepEqual(middle(array),[2,3]);
  });

  it('should return middle element if array length is odd', () => {
    const array = [1,2,3,4,5];
    assert.deepEqual(middle(array), [3]);
  });
});

// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1,2]),[]);
// assertArraysEqual(middle([1,2,3]),[2]);
// assertArraysEqual(middle([1,2,3,4,5]),[3]);
// assertArraysEqual(middle([1,2,3,4]),[2,3]);
// assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);