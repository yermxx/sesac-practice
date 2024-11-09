import { describe, expect, test } from '@jest/globals';
import { sum, isValid } from './hi';
// const sum = require('./hi.ts');

// const x = sum(1, 2);
// console.log(x);

describe('-hi-', () => {
  // 그룹으로 묶고 싶으면 describe 사용
  describe.skip('-hi-.sum =>', () => {
    test('hi.sum =>', () => {
      expect(sum(2, 5)).toBe(7);
    });
    test('hi.sum =>', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
  describe.skip('-hi-.valid =>', () => {
    test('isValid', () => {
      expect(isValid()).toBe(true);
      expect(isValid()).toBeTruthy();
      // expect(isValid()).not.toBe(true) // not을 붙이는 건 잘 쓰진 않음
      // boolean 같은 경우에는 falsy, truthy로 표기
    });
  });
});
