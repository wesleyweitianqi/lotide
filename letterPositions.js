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



const letterPositions = function(sentence) {
  // logic to update results here
  let string = sentence;   //.replace(/\s/g,"");
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (!results[string[i]]) {
      results[string[i]] = [i];
    } else {
      results[string[i]].push(i);
    }
  }
  delete results[' '];
  console.log(results);
  return results;
};
  
const sentence = "lighthouse in the house";

const arr1 = letterPositions(sentence);
assertArraysEqual(arr1['l'],[0]);
    
      

      
