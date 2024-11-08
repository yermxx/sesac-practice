import assert from 'assert';

const arr = [1, 2, 3, 4];

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

function deleteArray(array, ...arg) {
  const copyArr = [...array];

  if (arg.length === 1) {
    copyArr.splice(arg);
    return copyArr;
  }

  if (arg.length === 2 && typeof arg[0] === 'number') {
    copyArr.splice(arg[0], arg[1] - 1);
    return copyArr;
  }

  if (arg.length === 2 && typeof arg[0] === 'string') {
    return copyArr.filter((val) => val[arg[0]] !== arg[1]);
  }
}

// Test
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);
