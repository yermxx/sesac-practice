// 연습문제 1.

// 1-1.
for (let i = 0.1; i < 1; i += 0.1) {
  console.log(+i.toFixed(1));
}

console.log('-----------------');

// 1-2.
for (let i = 0.1; i < 1; i += 0.1) {
  console.log(Math.round(i * 10) / 10);
}

console.log('========================');

// 연습문제 2.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2-1.
for (const n of arr) {
  const root = Math.sqrt(n);

  if (root % 1 !== 0) {
    console.log(root.toFixed(3));
  }
}

console.log('-----------------');

// 2-2.
for (const n of arr) {
  const root = Math.sqrt(n);

  if (!Number.isInteger(root)) {
    console.log(root.toFixed(3));
  }
}

console.log('========================');

// 연습문제 3.

const today = new Date().getDay();

function findDay(num) {
  const WEEK_NAMES = '일월화수목금토';
  return console.log(`오늘은 ${WEEK_NAMES[num]}요일입니다.`);
}

findDay(today);

console.log('-----------------');

// switch 문
switch (today) {
  case 0:
    console.log('오늘은 일요일입니다.');
    break;
  case 1:
    console.log('오늘은 월요일입니다.');
    break;
  case 2:
    console.log('오늘은 화요일입니다.');
    break;
  case 3:
    console.log('오늘은 수요일입니다.');
    break;
  case 4:
    console.log('오늘은 목요일입니다.');
    break;
  case 5:
    console.log('오늘은 금요일입니다.');
    break;
  case 6:
    console.log('오늘은 토요일입니다.');
    break;
}

console.log('========================');

// 연습문제 4.

function addPoints(a, b) {
  // 소수점 자리수 구하기
  function findPoint(num) {
    const newArr = Array.from(String(num));

    let index = newArr.indexOf('.');
    // indexOf는 값이 없으면 -1 반환
    if (index === -1) return 0;

    return newArr.length - index - 1;
  }

  let pointA = findPoint(a);
  let pointB = findPoint(b);

  // 매개변수 a, b 더하기
  let sum = a + b;

  return pointA > pointB ? sum.toFixed(pointA) : sum.toFixed(pointB);
}

console.log(addPoints(0.21354, 0.1)); // 0.31354
console.log(addPoints(0.14, 0.28)); // 0.42
console.log(addPoints(0.34, 0.226)); // 0.566
console.log(addPoints(10.34, 200.226)); // 210.566
console.log(addPoints(0.143, -10.28)); // -10.137
console.log(addPoints(0.143, -10)); // -9.857
