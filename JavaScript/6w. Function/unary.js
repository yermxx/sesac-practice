const arr = ['1', '2', '3'];

const ret = arr.map(parseInt);
console.log(ret); // [ 1, NaN, NaN ]

const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));
const ret2 = arr.map(unary(parseInt));
console.log(ret2); // [ 1, 2, 3 ]

console.log('================================');

Array.prototype.mapX = function (f) {
  const result = [];
  for (let i = 0; i < this.length; i += 1) {
    result.push(f(this[i], i, this));
  }
  return result;
};

Array.prototype.map = function (fn) {
  for (let i = 0; i < this.length; i++) fn(this[i], i, this);
};

// funciton parseInt(s, radix) {}
const rets = arr.mapX(parseInt); // [ 1, NaN, NaN]
// parseInt('1', 0, ['1', '2', '3'])
// parseInt('2', 1, ['1', '2', '3'])
// parseInt('3', 2, ['1', '2', '3'])

const rets2 = arr.mapX(function (item) {
  return parseInt(item);
});

console.log('🚀 ret2:', rets2);
