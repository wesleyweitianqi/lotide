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

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const result3 = map(words,function(word) {
  return words.indexOf(word);
});
const results2 = map(words, item => item.length);
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2,[6,7,2,5,3]);
assertArraysEqual(result3,['g','c','t','m','t']);


