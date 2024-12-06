(async function main() {
  async function fetchNumber() {
    return await new Promise((resolve, reject) => {
      const random = (max = 10) => Math.round(Math.random() * max);
      const num = random();
      setTimeout(() => {
        if (num > 5) return resolve(num);
        else return reject(num);
      }, 1000);
    });
  }

  fetchNumber()
    .then((num) => multiplyNumber(num))
    .catch((error) => console.log('숫자 가져오기 실패! 가져온 숫자가 너무 작습니다...'));

  async function multiplyNumber(num) {
    return await Promise.resolve().then(() => {
      const ret = num * 10;
      setTimeout(() => {
        console.log(`
          가져온 숫자: ${num} 
          처리된 숫자: ${ret}
          `);
      }, 1000);
    });
  }
})();
