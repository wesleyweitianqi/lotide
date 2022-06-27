const assertEqual = function(actual, expected) {

  if (actual.toString() !== expected.toString()) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};



// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!