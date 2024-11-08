import assert from 'assert';

class Emp {
  firstName;
  lastName;
}

const hong = new Proxy(new Emp(), {
  set(target, prop, value) {
    if (prop === 'fullName') {
      if (value.includes(' ')) {
        const [first, last] = value.split(' ');
        target.firstName = first ?? target.firstName;
        target.lastName = last.toUpperCase();
      } else {
        target.lastName = value.toUpperCase();
      }
    } else {
      target[prop] = value;
    }
    return true;
  },
  get(target, prop) {
    if (prop === 'fullName') {
      return `${target.firstName} ${target.lastName}`;
    } else {
      return target[prop]?.toUpperCase();
    }
  },
});

hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
assert.strictEqual(hong.fullName, 'Kildong HONG');

hong.fullName = 'Lee';
assert.strictEqual(hong.fullName, 'Kildong LEE');

// console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
// console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
