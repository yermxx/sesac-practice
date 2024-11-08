import assert from 'assert';

// 배열을 객체로 변경

const data = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];

function makeObjectFromArray(arr) {
  let res = {};
  for (const [key, ...vals] of arr) {
    res[key] = vals;
  }
  return res;
}

const dataObj = makeObjectFromArray(data);
console.log(dataObj);

// 테스트 코드 실행 => 다양한 코드들을 돌리며 테스트해봐야 한다.
assert.deepStrictEqual(dataObj, { A: [10, 20], B: [30, 40], C: [50, 60, 70] }, 'Not Equals!!'); // true
assert.deepStrictEqual(
  makeObjectFromArray([['A', 10, 20], ['B'], [1, 2, 3]]),
  { A: [10, 20], B: [], 1: [2, 3] },
  'Not Equals!!'
); // true

console.log('===================================');

// 객체를 배열로 변경

function makeArrayFromObject(obj) {
  let res = [];
  for (const [key, val] of Object.entries(obj)) {
    res.push([key, ...val]);
  }
  return res;
}

const dataArr = makeArrayFromObject(dataObj);
console.log(dataArr);

// 테스트 코드 실행
assert.deepStrictEqual(dataArr, data); // true
