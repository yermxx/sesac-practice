import assert from 'assert';

//초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.
const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];

const searchByKoreanInitialSound = (arr, str) => {
  // 단어 초성 추출
  const getInitialSound = (word) => {
    const initialSound = [
      //'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ',
      'ㄱ',
      'ㄲ',
      'ㄴ',
      'ㄷ',
      'ㄸ',
      'ㄹ',
      'ㅁ',
      'ㅂ',
      'ㅃ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅉ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ',
    ];

    const wordArr = [...word].map((v) => {
      const code = v.charCodeAt(0) - 44032;
      if (code < 0 || code > 11171) return v;
      return code;
    });

    const arr = [];
    for (const a of wordArr) {
      typeof a === 'number' ? arr.push(initialSound[Math.floor(a / 588)]) : arr.push(a);
    }
    return arr.join('');
  };

  // 배열에 있는 모든 요소들 초성으로 변경
  const change = arr.map((v) => getInitialSound(v));

  const regexp = new RegExp(str, 'g');
  return arr.filter((_, i) => change[i].match(regexp));
};

// console.log(searchByKoreanInitialSound(s, 'ㄱㅅㄱ'));
// console.log(searchByKoreanInitialSound(s, 'ㅌㅅㅁ'));
// console.log(searchByKoreanInitialSound(s, 'ㅂㅁ'));
// console.log(searchByKoreanInitialSound(s, 'ㅍㅁ'));
// console.log(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'));

assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅇ'), ['강원도 고성군']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅅㄱ'), ['강원도 고성군', '고성군 토성면']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅌㅅㅁ'), ['고성군 토성면', '토성면 북면']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅂㅁ'), ['토성면 북면', '북면']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅍㅁ'), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);
