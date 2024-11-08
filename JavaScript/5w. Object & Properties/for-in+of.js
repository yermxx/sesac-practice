const arr = [100, 200, 300, 400, 500, 600, 700];

// for-in 문을 사용하여 배열의 인덱스(키)와 원소(값)를 출력하시오.
for (const key in arr) {
  console.log(key, arr[key]);
}

// for-of 문을 사용하여 배열의 원소(값)를 출력하시오.
for (const val of arr) {
  console.log(val);
}

console.log('===================================');

const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false };

// for-in문을 사용하여 프로퍼티 이름(키), 값을 출력하시오.
for (const key in obj) {
  console.log(key, obj[key]);
}

// for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (const val of Object.values(obj)) {
  console.log(val);
}

// Object.entries()를 사용하여 한꺼번에 출력하시오.
for (const [k, val] of Object.entries(obj)) {
  console.log(k, val);
}

// level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
Object.defineProperty(obj, 'level', { enumerable: false });
console.log(obj);

// role 프로퍼티는 읽기전용으로 설정하시오.
Object.defineProperty(obj, 'role', { writable: false });

obj.role = 10;
console.log(obj); // 읽기 전용으로 변경되어 값이 변경되지 않음!

console.log('===================================');
