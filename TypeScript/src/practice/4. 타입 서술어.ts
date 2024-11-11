// PRACTICE: 타입 제한자 - 타입 서술어 (Type Predicate)

// # 1.
// const isStringNumber = (value: unknown): value is [string, number] => <이 부분을 작성하시오>
const isStringNumber = (value: unknown): value is [string, number] => ['string', 'number'].includes(typeof value);

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

// # 2.
interface Animal {}
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}

// class Retriever implements Dog {}

// function isDog(a: Animal): a is Dog {
// 	<이 부분을 작성하시오>
// }

function isDog(a: Animal): a is Dog {
	return 'Dog' in a;
}

export {}