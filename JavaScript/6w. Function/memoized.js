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
