import assert from 'assert';

const isEndJaum = (str) => {
  const lastChar = str[str.length - 1];
  return lastChar.charCodeAt(0) >= 44032 ? (lastChar.charCodeAt(0) - 44032) % 28 !== 0 : /[136780lmnr]$/i.test(str);
};

const iga = (str) => (isEndJaum(str) ? '이' : '가');
const eunun = (str) => (isEndJaum(str) ? '은' : '는');
const eulul = (str) => (isEndJaum(str) ? '을' : '를');
const eyuya = (str) => (isEndJaum(str) ? '이어야' : '여야');


assert.equal(isEndJaum('아지오'), false);
assert.equal(isEndJaum('북한강'), true);
assert.equal(isEndJaum('뷁'), true);
assert.equal(isEndJaum('강원도'), false);
assert.equal(isEndJaum('바라당'), true);
assert.equal(isEndJaum('ㅜㅜ'), false);
assert.equal(isEndJaum('케잌'), true);
assert.equal(isEndJaum('점수 A'), false);
assert.equal(isEndJaum('알파벳L'), true);
assert.equal(isEndJaum('24'), false);
assert.equal(isEndJaum('23'), true);

assert.equal(`고성군${iga('고성군')}`, '고성군이');
assert.equal(`고성군${eunun('고성군')}`, '고성군은');
assert.equal(`고성군${eulul('고성군')}`, '고성군을');
assert.equal(`성동구${iga('성동구')}`, '성동구가');
assert.equal(`성동구${eunun('성동구')}`, '성동구는');
assert.equal(`성동구${eulul('성동구')}`, '성동구를');
assert.equal(`고성군${eyuya('고성군')}`, '고성군이어야');
assert.equal(`성동구${eyuya('성동구')}`, '성동구여야');

// console.log(isEndJaum('강원도')); // false
// console.log(isEndJaum('바라당')); // true
// console.log(isEndJaum('ㅜㅜ')); // false
// console.log(isEndJaum('케잌')); // true
// console.log(isEndJaum('점수 A')); // false lmnr
// console.log(isEndJaum('알파벳L')); //  true
// console.log(isEndJaum('24')); // false
// console.log(isEndJaum('23')); // true 136780

// console.log(`고성군${iga('고성군')}`); // 고성군이
// console.log(`강원도${iga('강원도')}`); // 강원도가
// console.log(`고성군${eunun('고성군')}`); // 고성군은
// console.log(`강원도${eunun('강원도')}`); // 강원도는

// console.log(`고성군${eulul('고성군')}`); // 고성군을
// console.log(`강원도${eulul('강원도')}`); // 강원도를

// console.log(('힣'.charCodeAt(0) - 44032) % 28 !== 0);
// console.log(('히'.charCodeAt(0) - 44032) % 28 !== 0);
