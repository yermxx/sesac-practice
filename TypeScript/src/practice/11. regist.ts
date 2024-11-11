// PRACTICE: 유틸리티 타입
// regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.

function registUserObj({ name, age }: {name: string; age: number}) {
  const id = 100;
  return { id, name, age };
}

// type RegistUserObj = Parameters<이용하여 이 부분을 작성해 보세요>;
type RegistUserObj = Parameters<typeof registUserObj>[number];

const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('🚀  newUser2:', newUser2);

export {}

