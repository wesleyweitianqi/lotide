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
  console.log(keys1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    console.log(key);
    let value1 = object1[key];
    let value2 = object2[key];
    console.log(value1,value2);
    if (typeof(value1) === typeof(value2) && typeof(value1) === 'object') {
      return eqObjects(value1,value2);
    }
    if (typeof(value1) !== typeof(value2)) return false;
    if (!eqArrays(value1,value2)) return false;
    if (!assertEqual(value1,value2)) return false;
  }
  return true;
  
};
  


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);
console.log('////////////////////');
const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false);
console.log('////////////////////');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
console.log('////////////////////');

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
console.log('////////////////////');


console.log(eqObjects({ a: { z: [3]}, b: 2 }, { a: { z: [3]}, b: 2 }));// => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));// => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));// => false