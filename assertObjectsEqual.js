const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    return false;
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      while (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
const eqObjects = function(object1, object2) {
  //have same number of keys;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    let value1 = object1[key];
    let value2 = object2[key];
    //console.log(value1,value2);
    if (!eqArrays(value1,value2)) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(`${inspect(actual)}`,`${inspect(expected)}`)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({name: 'wesley', age: 31},{name: 'wesl', age: 31});