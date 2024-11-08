import assert from 'assert';

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];
const arr = [1, 2, 3, 4, 5];

Object.defineProperties(Array.prototype, {
  // 1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy()
  mapBy: {
    value: function (key) {
      return this.map((a) => a[key]);
    },
    enumerable: false,
  },
  filterBy: {
    value: function (key, find, bool = false) {
      return this.filter((a) => {
        if (bool) {
          return a[key].includes(find);
        }
        return a[key] === find;
      });
    },
    enumerable: false,
  },
  rejectBy: {
    value: function (key, find, bool = false) {
      return this.filter((a) => {
        if (bool) {
          return !a[key].includes(find);
        }
        return a[key] !== find;
      });
    },
    enumerable: false,
  },
  findBy: {
    value: function (key, find) {
      return this.find((a) => a[key] === find);
    },
    enumerable: false,
  },
  sortBy: {
    value: function (key) {
      const [sortKey, order] = key.split(':');
      return this.sort((a, b) => {
        if (order === 'desc') {
          return a[sortKey] < b[sortKey] ? 1 : -1;
        }
        return a[sortKey] < b[sortKey] ? -1 : 1;
      });
    },
    enumerable: false,
  },
  // 2) firstObject, lastObject
  firstObject: {
    get: function () {
      return this[0];
    },
    set: function (val) {
      this[0] = val;
    },
  },
  lastObject: {
    get: function () {
      return this.at(-1);
    },
    set: function (val) {
      this[this.length - 1] = val;
    },
  },
});

assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy('name'), ['Hong', 'Lee', 'Kim']);
assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
assert.deepStrictEqual(users.filterBy('name', 'i', true), [kim]); // key, value일부, isInclude;
assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy('name', 'i', true), [hong, lee]);
assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, lee);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);
