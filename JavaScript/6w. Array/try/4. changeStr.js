import assert from 'assert';

// ex1.
const arr = [1, 2, 3, true];

const ret1 = arr.map((v) => v.toString());

// ex2.
const ret2 = classNames('', 'a b c', 'd', '', 'e');

const classNames = (...args) => {
  return args.filter((v) => v !== '').join(' ');
};

// Test
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);
assert.strictEqual(ret2, 'a b c d e');
