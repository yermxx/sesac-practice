import assert from 'assert';

const kim1 = { nid: 3, nm: 'Kim', addr: 'Pusan' };
const newKim1 = shallowCopy(kim1);
newKim1.addr = 'Daegu';

console.log(kim1.addr !== newKim1.addr); // true면 통과!
assert.notDeepStrictEqual(kim1, newKim1); // 테스트 코드

// Shallow Copy
function shallowCopy(obj) {
  const resObj = {};
  for (const [k, v] of Object.entries(obj)) {
    resObj[k] = v;
  }
  return resObj;
}

// Deep Copy
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const resObj = {};
  for (const [k, v] of Object.entries(obj)) {
    resObj[k] = deepCopy(v);
  }
  return resObj;
}

const kim2 = { nid: 3, nm: 'Kim', addr: { city: 'Pusan', road: 'Haeundaero', zip: null } };
const newKim2 = deepCopy(kim2);
assert.deepStrictEqual(kim2, newKim2);

newKim2.addr.city = 'Daegu';
assert.notStrictEqual(newKim2.addr.city, kim2.addr.city);

console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
