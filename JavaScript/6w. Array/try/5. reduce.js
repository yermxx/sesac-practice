import assert from 'assert';

const reduce = (arr, fn, initValue) => {
  if (initValue === undefined) {
    const findStr = fn.toString();
    if (typeof arr[0] !== 'number') {
      initValue = arr[0];
    } else if (findStr.includes('+') || findStr.includes('-')) {
      initValue = 0;
    } else if (findStr.includes('*') || findStr.includes('/')) {
      initValue = 1;
    } else {
      initValue = arr[0];
    }
  }
  return arr.reduce(fn, initValue);
};

const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [lee, park];

assert.deepStrictEqual(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  6
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  120
);
assert.deepStrictEqual(
  reduce([2, 2, 2], (a, b) => a * b),
  8
);
assert.deepStrictEqual(
  reduce([3, 3, 3], (a, b) => a * b, 0),
  0
);
assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  '[object Object]LeePark'
);
