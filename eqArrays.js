const eqArrays = function(arr1,arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
    
  }
  
  for (let i in arr1) {
    
    if (typeof (arr1[i]) !== typeof (arr2[i])) {
      result = false;
     
    }
      
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      console.log(eqArrays(arr1[i], arr2[i]));
    } else if (arr1[i] !== arr2[i]) result = false;
    
    
  }
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};
  
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), true);
