import assert from 'assert';

const arr = [1, 2, 3, 4, 5];

// [square, sqrt, cube].reduce
assert.deepStrictEqual(
  arr.reduce((acc, x) => {
    let ret = x;
    ret = ret ** 2; // square
    ret = Math.sqrt(ret); // sqrt
    ret = ret ** 3; // cube
    acc.push(ret);
    return acc;
  }, []),
  [1, 8, 27, 64, 125]
);

// [cube, square, sqrt].reduce
assert.deepStrictEqual(
  arr.reduce((acc, x) => {
    let ret = x;
    ret = ret ** 3; // cube
    ret = ret ** 2; // square
    ret = Math.sqrt(ret); // sqrt
    acc.push(ret);
    return acc;
  }, []),
  [1, 8, 27, 64, 125]
);
