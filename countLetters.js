const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (let i of string) {
    if (i !== " ") {
      if (!result[i]) {
        result[i] = 1;
      } else {
        result[i]++;
      }
    }
  }
  console.log(result);
  return result;
};
const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
const result1 = countLetters("lighthouse in the house");

assertEqual(result1.o,expected.o);