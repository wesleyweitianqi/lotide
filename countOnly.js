const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let allItemsCount = {};
  for (let i of allItems) {
    //console.log(i);
    if (!allItemsCount[i]) {
      allItemsCount[i] = 1;
    } else {
      allItemsCount[i]++;
    }
  }
  console.log(allItemsCount);

  for (let i in itemsToCount) {
    if (itemsToCount[i] === false) {
      delete itemsToCount[i];
    }
  }
  console.log(itemsToCount);
  const selectedItems = {};
  for (let i in itemsToCount) {
    selectedItems[i] = allItemsCount[i];
  }
  return selectedItems;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);