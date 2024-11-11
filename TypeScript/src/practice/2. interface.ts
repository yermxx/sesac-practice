// PRACTICE: interface
// 다음을 interface로 어떻게 정의할까??
// type Ud2 = (TUser | TDept) & {addr: string};

interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

interface Ud2 {
  [key: string]: string | number; // 이 부분을 입력하는 문제. 인덱스 시그니처 사용하면 된다.
  addr: string;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };