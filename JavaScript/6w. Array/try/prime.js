import assert from 'assert';

const makeArray = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1);
};
// console.log(makeArray(100));
// console.log(makeArray(31));

const arr100 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
  62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];

const arr31 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// 1. 실수 판별하는 함수
const isPrime = (n) => {
  if (n < 2) return false;
  return Array.from({ length: Math.floor(Math.sqrt(n)) - 1 }, (_, i) => i + 2).every((val) => n % val !== 0);
};
assert.strictEqual(isPrime(10), false);
assert.strictEqual(isPrime(5), true);
assert.strictEqual(isPrime(2), true);

// 2. 배열 내 요소 중 실수가 있는지 확인하는 함수
const hasPrime = (arr) => {
  return arr.some(isPrime);
};

assert.strictEqual(hasPrime([1, 2, 3]), true);
assert.strictEqual(hasPrime([4, 6, 10]), false);
assert.strictEqual(hasPrime([15, 16, 21]), false);

// 3. 배열 내 요소 중 실수들만 출력하는 함수
const primeNumbers = (arr) => {
  return arr.filter(isPrime);
};

assert.deepStrictEqual(
  primeNumbers(arr100),
  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
);
assert.deepStrictEqual(primeNumbers(arr31), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
