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

const middle = function(array) {
  if (array.length < 3) {
    console.log([]);
    return [];
  } else if (array.length % 2 === 0) {
    let i = array.length / 2 - 1;
    console.log(array.slice(i,i + 2));
    return array.slice(i,i + 2);
  } else {
    let i = Math.floor(array.length / 2);
    console.log(array.slice(i,i + 1));
    return array.slice(i,i + 1);
  }
};

// middle([1]); // => []
// middle([1, 2]);
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]


const result = assertArraysEqual(middle([1]),[]);
const result1 = assertArraysEqual(middle([1,2]),[]);
const result2 = assertArraysEqual(middle([1,2,3]),[2]);
const result3 = assertArraysEqual(middle([1,2,3,4,5]),[3]);
const result4 = assertArraysEqual(middle([1,2,3,4]),[2,3]);
const result5 = assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
