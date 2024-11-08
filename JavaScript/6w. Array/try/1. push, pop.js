import assert from 'assert';

const arr = [1, 2, 3, 4];

function push(arr, ...args) {
  return [...arr, ...args];
}

function pop(arr, count) {
  const copyArr = [...arr];

  if (count === undefined || count === 1) return copyArr.pop();
  if (count <= 0) return [];

  const ret = [];
  for (let i = 0; i < count; i++) {
    const popped = copyArr.pop();
    ret.unshift(popped);
  }
  return ret;
}

function unshift(arr, ...nums) {
  const copyArr = [...arr];
  copyArr.unshift(...nums);
  return copyArr;
}

function shift(arr, count) {
  const copyArr = [...arr];

  if (count === undefined || count === 1) {
    copyArr.shift();
    return copyArr;
  }
  if (count <= 0) return [];

  const removed = [];
  for (let i = 0; i < count; i++) {
    const shifted = copyArr.shift();
    removed.push(shifted);
  }
  return copyArr;
}

// Test
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(push(arr, 5, 6, 7, 8), [1, 2, 3, 4, 5, 6, 7, 8]);

assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!

assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]); // 2개 shift!

assert.deepStrictEqual(arr, [1, 2, 3, 4]);

console.log(arr);
