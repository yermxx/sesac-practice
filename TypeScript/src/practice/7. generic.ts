// PRACTICE: 제네릭 - Utility Type 만들기

// 문제 1) 특정 key의 타입을 변경하는 Change 유틸리티 타입 만들기 

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

// 수정해야 할 부분)
// type Change<T, K extends keyof T, U> = < 이 부분을 작성하세요 >
// type DeptCaptain = Change<IDept, 'captain', IUser>;
// type Err = Change<IDept, 'xxx', IUser>; // 존재하지 않는 키는 Error!!!

type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
}

type DeptCaptain = Change<IDept, 'captain', IUser>;
// type Err = Change<IDept, 'xxx', IUser>; // Error!!!


// 문제 2) 다음 코드가 오류가 나지 않도록 수정하시오.
// 단, itemPrices의 item에는 재고(stock)에 있는 item들만 가능합니다.

// cf. 우리가 원하는 구조
// type ItemPrice<T, U> = {item: 'X' | 'Y' | 'Z'; price: number};

type Item = { item: string; price: number };
// type ItemPrice<T, U> = <이 부분을 작성하시오>;

// 방법 1)
type ItemPrice<T, U> = {
  [k in keyof T]: k extends 'item' ? keyof U : T[k];
};

// 방법 2) 제네릭을 사용하지 않을 때는 아래 코드로 사용하면 된다.
// type ItemPrice = { item: keyof typeof stock; price: number }

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce((curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price, 0);
console.log(total);

