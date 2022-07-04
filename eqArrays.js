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


module.exports = eqArrays;
