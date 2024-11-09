import assert from 'assert';

const telfmt = (str) => {
  const patterns = [
    { regex: /^02(\d{3,4})(\d{4})$/, format: '02-$1-$2' },
    { regex: /^01([0|1|6|7|8|9])(\d{3,4})(\d{4})$/, format: '01$1-$2-$3' },
    { regex: /^0([3-6]\d{1})(\d{3,4})(\d{4})$/, format: '0$1-$2-$3' },
    { regex: /^0(70|50[1-9])(\d{3,4})(\d{4})$/, format: '0$1-$2-$3' },
    { regex: /^(\d{4})(\d{4})$/, format: '$1-$2' },
  ];

  for (const { regex, format } of patterns) {
    if (regex.test(str)) return str.replace(regex, format);
  }

  return str;
};

assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');

// const telfmt1 = (str) => {
//   if (str.startsWith('02')) return str.replace(/^(\d{2})(\d{3,4})(\d{4})$/, '$1-$2-$3');
//   else if (str.startsWith('0507')) return str.replace(/^(\d{4})(\d{4})(\d{4})$/, '$1-$2-$3');
//   else if (str.startsWith('0')) return str.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
//   else return str.replace(/^(\d{4})(\d{4})$/, '$1-$2');
// };

// assert.deepStrictEqual(telfmt1('0101234567'), '010-123-4567');
// assert.deepStrictEqual(telfmt1('01012345678'), '010-1234-5678');
// assert.deepStrictEqual(telfmt1('0212345678'), '02-1234-5678');
// assert.deepStrictEqual(telfmt1('021234567'), '02-123-4567');
// assert.deepStrictEqual(telfmt1('0331234567'), '033-123-4567');
// assert.deepStrictEqual(telfmt1('15771577'), '1577-1577');
// assert.deepStrictEqual(telfmt1('07012341234'), '070-1234-1234');
// assert.deepStrictEqual(telfmt1('050712345678'), '0507-1234-5678');

// telfmt('0101234567'); // '010-123-4567'
// telfmt('01012345678'); // '010-1234-5678'
// telfmt('0212345678'); // '02-1234-5678'
// telfmt('021234567'); // '02-123-4567'
// telfmt('0331234567'); // '033-123-4567'
// telfmt('15771577'); // '1577-1577'
// telfmt('07012341234'); // '070-1234-1234'
// ex) in JSX <small>{telfmt(user.tel)}</small>
