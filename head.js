const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(arr) {
  if (arr === []) {
    return undefined;
  } else {
    return arr[0];
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 8);