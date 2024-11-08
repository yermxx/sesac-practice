import readline from 'readline';
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

rl.on('close', function () {
  process.exit();
});

// cf. line listener : 입력값을 받고, bye 입력하면 터미널 종료
rl.on('line', (answer) => {
  console.log('line.answer>>', answer);
  if (answer === 'bye') rl.close();
}).on('close', () => {
  process.exit();
});
