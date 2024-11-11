// PRACTICE: 타입 운영
// 두 타입을 합치는 Combine 유틸리티 타입 만들기

// * 힌트: 두 타입의 같은 key 라면 union type, 그렇지 않다면 각 타입의 key type
// - 공통키: 키들의 교집합(keyof T & keyof U)

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

// 구현해야 할 부분
// type Combine<T, U> = < 이 부분을 작성하세요 >
// type ICombined = Combine<IUser, IDept>;

type Combine<T, U> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type ICombined = Combine<IUser, IDept>;

// let combineX: ICombined = {
//   id: 0,
//   age: 33,
//   name: 'aaa',
//   dname: 'bbb',
//   captain: 'ccc',
// };

// let combineY: ICombined = {
//   id: 0,
//   age: '33세',
//   name: 'aaa',
//   dname: 'bbb',
//   captain: 'ccc',
// };


const obj = { id: 1, name: 'Hong', addr: 'Seoul' } as const;
type T = typeof obj;
type K = keyof T;
type KK = keyof typeof T;

type X<T> = {
  [k in keyof T]: T[k];
};

let x: (typeof obj)[keyof typeof obj];
type Z = T[K];


export {}