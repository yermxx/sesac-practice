const LINE2 = [
  '신도림',
  '성수',
  '신설동',
  '용두',
  '신답',
  '용답',
  '시청',
  '충정로',
  '아현',
  '이대',
  '신촌',
  '공항철도',
  '홍대입구',
  '합정',
  '당산',
  '영등포구청',
  '문래',
  '대림',
  '구로디지털단지',
  '신대방',
  '신림',
  '봉천',
  '서울대입구',
  '낙성대',
  '사당',
  '방배',
  '서초',
  '교대',
  '강남',
  '역삼',
  '선릉',
  '삼성',
  '종합운동장',
  '신천',
  '잠실',
  '잠실나루',
  '강변',
  '구의',
  '건대입구',
  '뚝섬',
  '한양대',
  '왕십리',
  '상왕십리',
  '신당',
  '동대문역사문화공원',
  '을지로4가',
  '을지로3가',
  '을지로입구',
];

class Subway {
  constructor(start, end) {
    this.start = LINE2.indexOf(start);
    this.end = LINE2.indexOf(end);
    this.length = LINE2.length; // 48
  }

  [Symbol.iterator]() {
    let idx = this.start;
    let count = 0;
    let isEnd = false;

    const iterator = {
      next: () => {
        if (isEnd) {
          //console.log(count);
          return { value: undefined, done: true };
        } else {
          const value = LINE2[idx];
          isEnd = idx === this.end;
          idx = (idx + 1) % LINE2.length; // 모듈로 연산
          count++;
          return { value, done: false };
        }
      },
    };

    return iterator;
  }

  // 제너레이터 사용한다면 ?
  // *[Symbol.iterator]() {
  //   for (let i = this.start; i <= this.end; i++) {
  //     yield LINE2[i];
  //   }
  // }
}

const routes = new Subway('문래', '신림');
const it1 = routes[Symbol.iterator]();

console.log('routes>>', [...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }

console.log('=========================');

const routes2 = new Subway('구로디지털단지', '성수'); // 32개 정거장
const it2 = routes2[Symbol.iterator]();
console.log('routes2>>', [...routes2]); // ['구로디지털단지', '신대방', ..., '성수']

while (true) {
  const x = it2.next();
  if (x.done) break;
}
console.log('=========================');

const routes3 = new Subway('문래', '합정'); // 46개 정거장이면 통과!
const it3 = routes3[Symbol.iterator]();
console.log('routes3>>', [...routes3]);

while (true) {
  const x = it3.next();
  if (x.done) break;
}
console.log('=========================');

const routes4 = new Subway('신도림', '을지로입구'); // 48개 정거장이면 통과!
const it4 = routes4[Symbol.iterator]();
console.log('routes4>>', [...routes4]);

while (true) {
  const x = it4.next();
  if (x.done) break;
}
