import assert from 'assert';

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

// Object.defineProperty(users, 'addUser', {
//   value: function (obj) {
//     const newArr = [...users];
//     return [...newArr, obj];
//   },
// });

// Object.defineProperty(users, 'removeUser', {
//   value: function (user) {
//     const newArr = [...users];
//     return newArr.filter((v) => v !== user);
//   },
// });

// Object.defineProperty(users, 'changeUser', {
//   value: function (obj1, obj2) {
//     const newArr = [...users];
//     const findIdx = newArr.findIndex((v) => v === obj1);
//     if (findIdx !== -1) {
//       newArr.splice(findIdx, 1, obj2);
//     }
//     return [...newArr];
//   },
// });

Object.defineProperty(users, 'addUser', {
  value: function (obj) {
    return [...users, obj];
  },
});

Object.defineProperty(users, 'removeUser', {
  value: function (user) {
    return [...users].filter((v) => v.id !== user.id);
  },
});

Object.defineProperty(users, 'changeUser', {
  value: function (obj1, obj2) {
    return [...users].map((user) => (user.id === obj1.id ? obj2 : user));
  },
});

// console.log(users.addUser(hong)); // [kim, lee, park, hong]
// console.log(users.removeUser(lee)); // [kim, park]
// console.log(users.changeUser(kim, choi)); // [choi, lee, park]
// console.log(users); // [kim, lee, park]

// Test
assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);
assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);
assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);
