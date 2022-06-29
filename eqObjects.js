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
    console.log(value1,value2);
    if (!eqArrays(value1,value2)) {
      return false;
    }
  }
  return true;
};
  


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);
console.log('////////////////////');
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false);
console.log('////////////////////');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false



