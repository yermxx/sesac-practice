// 1. 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
const d1 = Date.parse('1970/01/01 00:00:00 UTC') / 1000;
const d2 = Date.parse('1970/01/02 00:00:00 UTC') / 1000;

console.log(d1);
console.log(d2);

// Date.UTC() 써도 됨!
// Date.UTC()에서 1월을 표현하려면 0을 써야 한다. (zerobase)
const D1 = new Date(Date.UTC(1970, 0, 1, 0, 0, 0)) / 1000;
const D2 = new Date(Date.UTC(1970, 0, 2, 0, 0, 0)) / 1000;

console.log(D1);
console.log(D2);

console.log('=============================');

// 2. 내년(2025년)의 오늘의 요일을 출력하시오.

const day = new Date();
const nextYear = new Date(day.setDate(day.getDate() + 365)).getDay();

console.log(`${'일월화수목금토'[nextYear]}요일 입니다.`);

console.log('=============================');

// 3. 오늘로부터 100일 후의 날짜는?

const date = new Date();
date.setDate(date.getDate() + 100);

console.log(date);
