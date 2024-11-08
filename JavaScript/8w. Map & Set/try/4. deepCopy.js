import assert from 'assert';

// Error 뜨므로 따로 정의!
const arr = [1, 2, 3];
const hong = { id: 1, name: 'Hong' };

const kim = {
  nid: 3,
  addr: 'Pusan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol('symbol2'),
  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[hong, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};

const deepCopy = (obj) => {
  const copyObj = {};

  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof WeakMap || obj instanceof WeakSet) return obj;

  // Symbol 처리 -> Reflect.ownKeys()
  for (const key of Reflect.ownKeys(obj)) {
    const val = obj[key];
    if (typeof v !== 'object' || v === null) copyObj[key] = deepCopy(val);
    if (obj instanceof Map) copyObj = new Map(Array.from(obj, ([key, val]) => [deepCopy(key), deepCopy(val)]));
    if (obj instanceof Set) copyObj = new Set(Array.from(obj, (val) => deepCopy(val)));
  }

  return copyObj;
};

const newKim = deepCopy(kim);
//assert.deepStrictEqual(newKim, kim, 'deepCopy equal fail!');

newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
assert.notDeepStrictEqual(newKim, kim, 'Not Valid Deep Copy!');

newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], 'pass2: 다르지 않아요!');
assert.notStrictEqual(kim.oo.addr.city, newKim.oo.addr.city, 'Not Pass3: city가 다르지 않아요!');
