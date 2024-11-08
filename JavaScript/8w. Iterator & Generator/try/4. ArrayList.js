import assert from 'assert';

class Collection {
  constructor(items = []) {
    if (Array.isArray(items)) {
      this.items = items;
    } else {
      this.items = this.listToArray(items);
    }
  }

  get size() {
    return this.items.length;
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  get peek() {
    return this.items.at(this.items.length ? -1 : 0);
  }

  indexOf(val) {
    return this.items.indexOf(val);
  }

  contains(val) {
    return this.items.includes(val);
  }

  toArray() {
    return [...this.items];
  }

  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.items.length; idx++) {
      yield this.items[idx];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  clear() {
    this.length = 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    //return JSON.stringify(this.items);
    return ArrayList.arrayToList(this.items);
    // return JSON.stringify(ArrayList.arrayToList(this.items), null, 2).replaceAll('"', '');
  }
}

class ArrayList extends Collection {
  static listToArray(list) {
    const arr = [];
    let node = list;
    while (true) {
      arr.push(node.value);
      node = node?.rest;
      if (!node) break;
    }
    return arr;
  }

  static arrayToList(arr) {
    let node;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      node = node ? { value: arr[i], rest: node } : { value: arr[i] };
    }
    return node;
  }

  add(val, idx) {
    if (idx >= 0) this.items.splice(idx, 0, val);
    else this.items.push(val);
    return this.toString();
  }

  remove(val) {
    const idx = this.items.indexOf(val);
    const findIdx = this.items.findIndex((_, idx) => idx + 1 === val);
    if (idx !== -1) {
      this.items.splice(idx, 1);
      this.items.splice(findIdx, 1);
    }
    return this.toString();
  }

  set(idx, val) {
    this.items.splice(idx, 1, val);
    return this.toString();
  }

  get(idx) {
    return this.items.find((_, i) => i === idx);
  }

  // toString() {
  //   // return JSON.stringify(ArrayList.arrayToList(this.items));
  //   // console.trace('toString called');
  //   return ArrayList.arrayToList(this.items);
  // }

  print() {
    console.log(`${this.constructor.name}(${this.size()}) ${JSON.stringify(this.toString()).replaceAll('"', '')}`);
    //console.log(`${this.constructor.name}(${this.size()}) ${this.toString()}`);
  }
}

assert.deepStrictEqual(ArrayList.listToArray({ value: 1, rest: { value: 2 } }), [1, 2]);
assert.deepStrictEqual(ArrayList.arrayToList([1, 2]), { value: 1, rest: { value: 2 } });

const alist = new ArrayList([1, 2]);
//assert.deepStrictEqual(alist.toString(), { value: 1, rest: { value: 2 } });
//console.log(alist.toString());
console.log(alist);

assert.deepStrictEqual(alist.add(3), { value: 1, rest: { value: 2, rest: { value: 3 } } });
assert.deepStrictEqual(alist.add(5, 1), { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3 } } } });
assert.deepStrictEqual(alist.remove(2), { value: 1, rest: { value: 3 } });
assert.deepStrictEqual(alist.add(22, 1), { value: 1, rest: { value: 22, rest: { value: 3 } } });
assert.deepStrictEqual(alist.add(33, 1), { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } });

// TODO: Error!! print() 출력 시, [Object object] 반환
alist.print();
// assert.deepStrictEqual(
//   alist.print(),
//   'ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } }'
// );

assert.deepStrictEqual(alist.set(1, 300), { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } });
assert.strictEqual(alist.get(2), 22);
assert.strictEqual(alist.size(), 4);
assert.strictEqual(alist.indexOf(300), 1);
assert.strictEqual(alist.contains(300), true);
assert.strictEqual(alist.contains(301), false);
assert.strictEqual(alist.isEmpty, false);
assert.strictEqual(alist.peek, 3);
assert.deepStrictEqual(alist.toArray(), [1, 300, 22, 3]);
assert.deepStrictEqual(alist.iterator().next(), { value: 1, done: false });
alist.clear();
alist.print();
