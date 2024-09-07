// 연습문제 1.

const hong = { id: 1, name: 'Hong' };

function f1(user) {
  const { id, name } = user;
  return [id, name];
}
console.log(f1(hong));

function f2({ id, name }) {
  return [id, name];
}
console.log(f2(hong));

const f3 = ({ id, name }) => {
  return [id, name];
};
console.log(f3(hong));

console.log('==========================================');

// 연습문제 2.

const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };
const { passwd, ...userInfo } = user;
console.log(userInfo);

console.log('==========================================');

// 연습문제 3.

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);

console.log('==========================================');

// 연습문제 4.

const user1 = { name: 'Hong', passwd: 'xyz', addr: 'Seoul' };

function getValueExceptInitial(k) {
  const { [k]: val } = user1;
  const [, ...chars] = [...val];
  return chars.join('');
}

// join을 쓰지 않는다면?

function getValueExceptInitial(k) {
  const { [k]: val } = user1;
  const [, ...chars] = [...val];
  let res = '';
  for (let i = 0; i < chars.length; i += 1) {
    res += chars[i];
  }
  return res;
}

console.log(getValueExceptInitial('name')); // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr')); // 'eoul'
