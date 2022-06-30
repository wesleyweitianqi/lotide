const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(obj, callback) {
  const vals = Object.values(obj);
  const keys = Object.keys(obj);
  for (let val of vals) {
    if (callback(val)) {
      const index = vals.indexOf(val);
      return keys[index];
    }
  }
};
    
    
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
console.log(result);
assertEqual(result, "noma");




