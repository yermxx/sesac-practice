import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('날짜를 입력하세요 (YYYY/MM/DD 형식): ', (answer) => {
  const [year, month, day] = answer.split('/').map(Number);
  const inputDate = new Date(year, month, day);

  isNaN(inputDate.getTime()) ? console.log('올바른 날짜 형식이 아닙니다. 다시 입력하세요!') : monthCal(year, month);

  rl.close();
});

const monthCal = (year, month) => {
  const date = new Date(year, month - 1, 1);
  console.log(`      ${month}월 ${year}`);

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  console.log(weekdays.join(' '));

  const firstWeekDay = date.getDay();

  let countDay = 1;

  for (let i = 0; i < 6; i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstWeekDay) week.push('  ');
      else if (countDay > new Date(year, month - 1, 0).getDate()) week.push(' ');
      else {
        week.push(String(countDay).padStart(2));
        countDay++;
      }
    }
    console.log(week.join(' '));
    if (countDay > new Date(year, month, 0).getDate()) break;
  }
};
