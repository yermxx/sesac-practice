function* add() {
  const a = yield '첫 번째 수?';
  const b = yield '두 번째 수?';
  return a + b;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);

// (실행 결과: 1과 2를 넣었을 때)
// 첫 번째 수? → 1 next(1)
// 두 번째 수? → 2
// Total: 3
