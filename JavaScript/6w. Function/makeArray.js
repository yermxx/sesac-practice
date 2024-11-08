function makeArray(n) {
  if (n === 1) return [1];
  return [...makeArray(n - 1), n];
}

console.log(makeArray(10));

function makeReverseArray(n) {
  if (n === 1) return [1];
  return [n, ...makeReverseArray(n - 1)];
}
console.log(makeReverseArray(5));