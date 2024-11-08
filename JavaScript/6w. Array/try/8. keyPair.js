import assert from 'assert';

function keyPair(array, num) {
  return array.reduce((acc, cur, idx) => {
    const diff = num - cur;
    const diffIdx = array.indexOf(diff, idx + 1);
    if (diffIdx !== -1) {
      return [idx, diffIdx];
    }
    return acc;
  }, []);
}

// Test
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
