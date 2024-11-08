import assert from 'assert';

const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];

const hong = { id: 1, name: 'Hong', dept: 1 }; // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [hong, kim, { id: 3, name: 'Park', dept: 2 }, { id: 4, name: 'Choi', dept: 2 }];

// Object.keys(emps).forEach((key) => {
//   Object.defineProperty(emps[key], 'dept', {
//     enumerable: false,
//   });
// });
// console.log('emp>>', emps);

console.log('============================================');

// 1. deptMap
const deptMap = new Map(Object.entries(depts));

console.log('deptMap>>', deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } } ⇐ deptMap.get(2)
//console.log(deptMap.get());

console.log('============================================');

// 2. empMap
const empMap = new Map(Object.entries(emps));
console.log('empMap>>', empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

console.log('============================================');

// 3. empDept
const empDept = new Map();

// empDept 키 : 값 설정
for (let [_, val1] of empMap) {
  let hrDept, devDept;
  for (let [_, val2] of deptMap) {
    val2.dname === '인사팀' ? (hrDept = val2) : (devDept = val2);
  }
  val1.dept === 1 ? empDept.set(val1, hrDept) : empDept.set(val1, devDept);
}

// 'dept'만 삭제
for (let [key] of empDept) {
  Object.defineProperty(key, 'dept', {
    enumerable: false,
  });
}

console.log('empDept>>', empDept);
// Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);

// 객체 값만 추출하기?
// function deepCopy(obj) {
//   if (typeof obj !== 'object' || obj === null) return obj;
//   let copy = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       copy[key] = deepCopy(obj[key]);
//     }
//   }

//   return copy;
// }

// const newEmp = Object.assign({}, empDept);
// console.log('newEmp>>', newEmp);
//console.log(deepCopy(newEmp));

console.log('============================================');

// 속해있는 팀 찾기
console.log('kim의 소속 팀은?>>', empDept.get(kim)?.dname); // '개발팀'
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);

console.log('============================================');

// 개발팀 직원 목록 출력
const devPeople = [...empDept].filter(([_, dept]) => dept.dname === '개발팀').map(([emp, _]) => emp.name);
console.log('devPeople>>', devPeople); // [ 'Kim', 'Park', 'Choi' ]

console.log('============================================');

// getEmp 함수 만들기 : Object.assign() 이용!
function getEmp(empId) {
  let copy = {};

  for (let [_, val] of empMap) {
    for (let [_, val] of deptMap) {
      if (val.id === empId) copy = Object.assign({}, val);
    }
    if (val.id === empId) return { ...val, dept: copy };
  }
}

console.log('getEmp(1)>>', getEmp(1)); // { id: 1, name: 'Hong', dept: { id:1, dname: '인사팀' } }
//console.log('getEmp(2)>>', getEmp(2)); // { id: 2, name: 'Kim', dept: { id: 2, dname: '개발팀' } }
assert.deepStrictEqual(getEmp(1), { id: 1, name: 'Hong', dept: { id: 1, dname: '인사팀' } });
