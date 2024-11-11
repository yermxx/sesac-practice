// PRACTICE: 유틸리티 타입
type R = Record<string, number>;
// type R = { [k:string]: number };

// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요. (id, name, age, addr)
let users = [
    {name: 'Hong'},
    {age: 23},
    {id: 1, addr: 'Seoul'},
];

// 구현해야 할 부분
// type FullUser = <이 부분을 작성하시오>;
const ret: FullUser = users.reduce( (acc, user) => ({...acc, ...user}), {});

