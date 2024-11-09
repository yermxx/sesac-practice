import assert from 'assert';

// 문자열 str에서 대문자만 골라 소문자로 변환하세요.
// const upperToLower = (str) => {
//   return str.replace(/[A-Z]/g, '*$&*-').replace(/[A-Z]/g, (match) => match.toLowerCase());
// };
const upperToLower = (str) => str.replace(/[A-Z]/g, (match) => `*${match.toLowerCase()}*-`);

// trythis: 대문자 <-> 소문자
// const switchChar = (str) => {
//   return str.replace(/[a-z]/gi, (match) => {
//     const [lower, upper] = [match.toLowerCase(), match.toUpperCase()];
//     return match === lower ? upper : lower;
//   });
// };

const switchChar = (str) =>
  str.replace(/([A-Z])([a-z]*)/g, (_matchedStr, upper, lower) => {
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });

// test
assert.strictEqual(upperToLower('Senior Coding Learning JS'), '*s*-enior *c*-oding *l*-earning *j*-*s*-');
assert.strictEqual(switchChar('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
assert.strictEqual(switchChar('Apple'), 'aPPLE');
