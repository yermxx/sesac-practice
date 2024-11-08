import assert from 'assert';

function range(start, end, step = start > end ? -1 : 1) {
  if (start === end || step === 0) return [start];
  if ((start - end) * step > 0) return [];

  if (end === undefined) {
    if (start === 0) return [0];
    end = start < 0 ? -1 : start; // start가 음수일 경우 end를 -1로 설정, 아니라면 end를 start로 설정
    start = start < 0 ? start : 1; // start가 음수일 경우 start를 그대로 유지, 아니라면 start를 1로 설정
  }

  let length = 0;
  start < end ? (length = end - start + 1) : (length = start - end + 1);

  const arr = Array.from({ length: length }, (_, i) => i + start);
  return arr.filter((_, i) => i % step === 0).map((_, i) => start + i * step);
}

// 리팩토링 전
// function range(start, end, step) {
//   if (step === undefined) {
//     start > end ? (step = -1) : (step = 1);
//   }

//   if (end === undefined) {
//     if (start === 0) return [0];
//     end = start < 0 ? -1 : start; // start가 음수일 경우 end를 -1로 설정, 아니라면 end를 start로 설정
//     start = start < 0 ? start : 1; // start가 음수일 경우 start를 그대로 유지, 아니라면 start를 1로 설정
//   }

//   if (start === end || step === 0) {
//     return [start];
//   }

//   if ((start - end) * step > 0) {
//     return [];
//   }

//   if (start === 0 && end === 0) {
//     return [0];
//   }

//   let length = 0;
//   start < end ? (length = end - start + 1) : (length = start - end + 1);

//   const arr = Array.from({ length: length }, (_, i) => i + start);
//   return arr.filter((_, i) => i % step === 0).map((_, i) => start + i * step);
// }

// assert
assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);

assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);

// console.log(range(1, 10, 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
// console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range(10, 1, -2)); // [10, 8, 6, 4, 2]
// console.log(range(5)); // [1, 2, 3, 4, 5]
// console.log(range(100)); // [1, 2, 3, 4, 5, ..., 99, 100]

// console.log(range(-5)); // [-5, -4, -3, -2, -1]
// console.log(range(5, 5)); // [5]
// console.log(range(5, 5, 0)); // [5]
// console.log(range(5, 5, -1)); // [5]
// console.log(range(5, 1, 1)); // []
// console.log(range(1, 5, -1)); // []

// console.log(range(1, 5, 6)); // [1]
// console.log(range(0)); // [0]
// console.log(range(2, 1, -5)); // [2]
// console.log(range(1, 5, 0)); // [1]
// console.log(range(0, 5)); // [0, 1, 2, 3, 4, 5]
// console.log(range(0, -1)); // [0, -1]
// console.log(range(0, -3)); // [0, -1, -2, -3]
// console.log(range(-3, 0)); // [-3, -2, -1, 0]
// console.log(range(5, 1)); // [5, 4, 3, 2, 1]
// console.log(range(0, 0)); // [0]
// console.log(range(0, -1, -5)); // [0]
// console.log(range(0, 0, 5)); // [0]
