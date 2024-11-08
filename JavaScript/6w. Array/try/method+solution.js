const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
console.log('ex1 ->', arr2.slice(1, 3));

// ex2) [3]부터 모두 다 추출
console.log(
  'ex2 ->',
  arr2.filter((v) => v > 2)
);

// ex3) [2,3,4] 제거하기
const splice = arr2.splice(1, 3);
console.log('ex3 ->', arr2);

// ex4) 복원하기
const reset = arr2.splice(1, 0, 2, 3, 4);
console.log('ex4 ->', arr2);

// ex5) [3] 부터 끝까지 제거하기
const splice2 = arr2.splice(2);
console.log('ex5 ->', arr2);

// ex6) 복원하기
const reset2 = arr2.splice(2, 0, 3, 4, 5);
console.log('ex6 ->', arr2);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
const splice3 = arr2.splice(2);
const reset3 = arr2.splice(2, 0, ...'XYZ', 4, 5);
console.log('ex7-1 ->', arr2);
// 복원
arr2.splice(2, 3, 3);

// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
const delete3 = arr2.splice(2, 1, ...'XYZ').join(',');
console.log('ex7-2 ->', arr2);
// 복원
arr2.splice(2, 3, 3);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
// 1. 재귀 함수 이용
function insertStr(arr) {
  if (arr.length === 0) return [];

  const [x, ...y] = arr;

  return x === 3 ? [...'XYZ', ...insertStr(y)] : [x, ...insertStr(y)];
}

console.log('ex8 ->', insertStr(arr2));

// 2. slice 이용
console.log([...arr2.slice(0, 2), ...'XYZ', ...arr2.slice(3)]);
