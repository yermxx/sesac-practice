import assert from 'assert';

// ex1) Stack
class Stack {
  constructor(init = []) {
    this.items = [...init];
  }

  // 마지막 요소 추가
  push(num) {
    this.items.push(num);
    return;
  }

  // 마지막 요소 제거
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // 스택 비움 (초기화)
  clear() {
    this.items = [];
  }

  // 스택 요소들 출력
  print() {
    return console.log(this.items);
  }

  // 마지막 요소 삭제만! (반환 X)
  remove() {
    this.items.pop();
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 마지막 요소 반환 (제거 X)
  peek() {
    return this.items[this.items.length - 1];
  }

  // 제거한 마지막 요소 반환
  poll() {
    const popped = this.items.pop();
    return popped;
  }

  // 스택 길이 반환
  size() {
    return this.items.length;
  }
}

const stack = new Stack(); // or new Stack([1,2]); // ⇐⇒ (1,2)

// stack.push(3); // 추가하기
// console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기

assert.deepStrictEqual(stack.isEmpty(), true);

stack.push(1);
stack.push(2);
stack.push(3);
assert.strictEqual(stack.size(), 3);

assert.strictEqual(stack.peek(), 3);

assert.strictEqual(stack.pop(), 3);
assert.strictEqual(stack.size(), 2);

stack.remove();
assert.strictEqual(stack.size(), 1);

assert.strictEqual(stack.poll(), 1);
assert.strictEqual(stack.isEmpty(), true);

stack.push(4);
stack.push(5);
stack.clear();
assert.strictEqual(stack.size(), 0); // 0

// ex2) Queue

class Queue {
  constructor(init = []) {
    this.items = [...init];
  }

  // 마지막 요소 추가
  enqueue(num) {
    this.items.push(num);
    return this.items;
  }

  // 첫번째 요소 제거
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  // 큐 초기화
  clear() {
    this.items = [];
  }

  // 큐 요소들 출력
  print() {
    return console.log(this.items);
  }

  // 첫번째 요소 삭제 (반환 X)
  remove() {
    this.items.shift();
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 첫번째 요소 확인
  peek() {
    return this.items[0];
  }

  // 제거한 첫번째 요소 반환
  poll() {
    const shifted = this.items.shift();
    return shifted;
  }

  // 큐 길이 반환
  size() {
    return this.items.length;
  }

  toArray() {
    return [...this.items];
  }
}

const queue = new Queue();
assert.strictEqual(queue.isEmpty(), true); // true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
assert.strictEqual(queue.size(), 3); // 3

assert.strictEqual(queue.peek(), 1); // 1

assert.strictEqual(queue.dequeue(), 1); // 1
assert.strictEqual(queue.size(), 2); // 2

queue.remove();
assert.strictEqual(queue.size(), 1); // 1

assert.strictEqual(queue.poll(), 3); // 3
assert.strictEqual(queue.isEmpty(), true); // true

queue.enqueue(4);
queue.enqueue(5);
queue.clear();
assert.strictEqual(queue.size(), 0); // 0

// ex3 ) Collection
// 공통: clear(), print(), remove(), isEmtpy, peek, poll, length(size)
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
// console.log(stack.peek(), queue.peek()); // 마지막(다음에 나올) 원소
// queue.print(); // 출력해보기

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

const arr = queue.toArray().map((a) => console.log(a));
arr; // 1 2 3

if (!stack.isEmpty) stack.clear();
if (queue.length) queue.clear();

// Collection이 부모 클래스
// Stack, Queue가 자식 클래스로 Collection을 상속받아야 한다.
