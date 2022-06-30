const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(function(obj) {
  let keys = Object.keys(obj);
  let val = 0;
  for (let key of keys) {
    val += obj[key] * obj[key];
  }
  return Math.sqrt(val);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
      