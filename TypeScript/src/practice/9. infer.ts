// PRACTICE: 타입 운영
// 특정 함수의 인자 타입을 추출하는 유틸리티 타입을 작성하시오. (infer)

function add(a: number, b: string) {
  return `${a} - ${b}`;
}

// cf. any[]를 unknown[]으로 하면 왜 안될까???
type FirstArgs<F> = F extends (first: infer First, ...args: any[]) => void ? First : never;
type SecondArgs<F> = F extends (first: any, second: infer Second, ...args: any[]) => any ? Second : never;
type Args<F> = F extends (...args: infer Args) => any ? Args[number] : never;

// 구현해야 할 부분
// type FirstArgs<F> = < 이 부분을 작성하세요 >
// type SecondArgs<F> = < 이 부분을 작성하세요 >
// type Args<F> = < 이 부분을 작성하세요 >

// type FirstArgs<F> = F extends infer F ? typeof a : F;
// type SecondArgs<F> = F extends infer F ? typeof b : F;
// type Args<F> = F extends infer F ? typeof a | typeof b : F;

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string

type AX = Args<typeof String.prototype.endsWith>; // ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>; // ⇒ number

export {}