
const assertArraysEqual = require('../assertArraysEqual');


const result = assertArraysEqual([1,2],[1,2,3]);
const result1 = assertArraysEqual([1,2],[1,3]);
const result2 = assertArraysEqual([1,2],[1,2]);

