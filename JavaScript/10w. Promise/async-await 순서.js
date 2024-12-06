// ex 1)
const one = () => Promise.resolve('One!');

async function myFunc() {
  console.log('In function!');
  let x = 1;
  console.log(x);
  const res = await one();
  console.log(res);
  x++;
  console.log(x);
}

console.log('Before');
myFunc();
console.log('After');

// ex 2)
console.log('시작');

setTimeout(() => console.log('타이머 1'), 0);

Promise.resolve()
  .then(() => {
    console.log('프로미스 1');
    setTimeout(() => console.log('타이머 2'), 0);
    return new Promise((resolve) => {
      console.log('프로미스 2');
      resolve('resolve 1');
    });
  })
  .then((result) => {
    // 1. 출력
    console.log(result);

    // 2. 새로운 Promise Chain 생성 -> 나중에 실행
    Promise.resolve()
      .then(() => {
        console.log('프로미스 3');
        return 'resolve 2';
      })
      .then((result) => console.log(result));

    // 3. 여기서 바로 'resolve 3' 반환
    return 'resolve 3';
  })
  .then((result) => console.log(result)); // 'resolve 3' 먼저 출력

console.log('끝');

// ex 3)
console.log('시작');

async function foo() {
  console.log('foo 시작');
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('타이머 1'); // await을 만나면 해당 Promise가 resolve될 때까지 그 다음 코드들이 실행되지 않음
      resolve('결과 1');
    }, 0);
  });
  console.log(result); // 이 줄은 'resolve('결과 1')' 이후에만 실행됨
  return result;
}

async function bar() {
  console.log('bar 시작');
  const result = await foo();
  console.log('bar 결과:', result);
  await Promise.resolve('결과 2').then(console.log);
  console.log('bar 끝');
}

bar().then(() => console.log('모든 작업 완료'));

console.log('끝');

// ex 4)
console.log('시작');

async function getData() {
  console.log('getData 시작');
  await Promise.resolve().then(() => console.log('프로미스 1'));
  setTimeout(() => console.log('타이머 1'), 0);
  return 'data';
}

setTimeout(() => console.log('타이머 2'), 0);

Promise.resolve()
  .then(async () => {
    console.log('프로미스 2');
    const result = await getData();
    console.log(result);
    return '완료';
  })
  .then((result) => console.log(result));

console.log('끝');

// ex 5)
console.log('시작');

async function fetchData() {
  console.log('fetch 시작');
  const result = await Promise.resolve('데이터');
  console.log('데이터 도착');
  return result;
}

setTimeout(() => console.log('타이머 1'), 0);

new Promise((resolve, reject) => {
  console.log('프로미스 1'); // resolve/reject으로 전달되는 결과와 그 이후의 then/catch 핸들러들이 비동기적으로 처리되고, 이건 바로 출력됨 !!
  reject('에러 발생!');
})
  .catch((error) => {
    console.log(error);
    return fetchData();
  })
  .then((result) => {
    console.log(result);
    setTimeout(() => console.log('타이머 2'), 0);
    return '완료';
  })
  .then((result) => console.log(result));

console.log('끝');
