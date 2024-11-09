import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getDay(month) {
  const year = new Date().getFullYear();
  return new Date(year, month, 0).getDate();
}

rl.question('월(Month)을 입력하세요. (숫자 형식) : ', (month) => {
  const year = new Date().getFullYear();
  const monthNum = parseInt(month);

  if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    console.log('유효하지 않은 월입니다. 1월 ~ 12월 사이로 다시 입력해주세요.');
    rl.close();
    return;
  }

  const dayInMonth = getDay(monthNum);

  const randomSet = new Set();
  while (randomSet.size < 5) {
    randomSet.add(`${Math.floor(Math.random() * dayInMonth + 1)}일`);
  }
  const random = Array.from(randomSet).sort((a, b) => parseInt(b) - parseInt(a));

  console.log(`${year}년 ${month} 월의 추첨일: `, random);

  rl.close();
});
