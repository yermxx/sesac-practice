// 연습문제 1. 재귀함수 + 디스트럭처링

function makeArray(n) {
  if (n === 1) {
    return [1];
  }

  return [...(arr = makeArray(n - 1)), n];
}

console.log(makeArray(10));

function makeReverseArray(n) {
  if (n === 1) {
    return [1];
  }

  return [n, ...(arr = makeReverseArray(n - 1))];
}

console.log(makeReverseArray(5));

console.log('===========================');

// 연습문제 2. 피보나치 수열

// 가. Loop 이용
function fibonacci1(n) {
  let res = [];
  res[0] = 0;
  res[1] = 1;

  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 2] + res[i - 1];
  }

  return res[n];
}

console.log(fibonacci1(5));
console.log(fibonacci1(7));
console.log(fibonacci1(30));

// 나. 순수 재귀함수 이용
function fibonacci2(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci2(n - 2) + fibonacci2(n - 1);
}

console.log(fibonacci2(5));
console.log(fibonacci2(7));
console.log(fibonacci2(30));

// 다. memoization 이용

function memoized(fn) {
  const memoizedTable = {};
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

let memoizedCount = 0;

const memoizedFactorial = memoized(function A(n) {
  memoizedCount += 1;
  if (n <= 1) return n;
  return memoizedFactorial(n - 2) + memoizedFactorial(n - 1);
});

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(7));
console.log(memoizedFactorial(30));
