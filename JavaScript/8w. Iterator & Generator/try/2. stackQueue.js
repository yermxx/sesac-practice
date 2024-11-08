class Stack {
  constructor(arr = []) {
    this.arr = [...arr];
  }

  push(val) {
    this.arr.push(val);
    return this;
  }

  pop() {
    return this.arr.pop();
  }

  [Symbol.iterator]() {
    let idx = this.arr.length - 1;
    return {
      next: () => {
        if (idx >= 0) {
          return { value: this.arr[idx--], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

class Queue {
  constructor(arr = []) {
    this.arr = [...arr];
  }

  // 마지막 요소 추가
  enqueue(val) {
    this.arr.push(val);
    return this;
  }

  // 첫번째 요소 제거
  dequeue(val) {
    return this.arr.shift();
  }

  // 제너레이터 사용
  *iterator() {
    for (let i = 0; i < this.arr.length; i++) {
      yield this.arr[i];
    }
  }

  [Symbol.iterator]() {
    return this.iterator();
  }
}

const stack = new Stack([1, 2]);
console.log('🚀 ~ stack:', stack);

const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());

for (const s of stack) console.log(s);

console.log('======================');

const queue = new Queue([1, 2, 3]);
const itQueue = queue.iterator();
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());

console.log('======================');

for (const q of queue) console.log(q);

console.log([...stack], [...queue]);
