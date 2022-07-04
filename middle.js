
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
module.exports = middle;
