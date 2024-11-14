const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/ttt/:id', (req, res, next) => {
  console.log('/ttt - use!!');
  next();
});

app.get('/ttt/:id', (req, res) => {
  console.log('/ttt - get!!');
  const { id } = req.params;
  const { name } = req.query.name;
  if (!id || !name) {
    res.status(401).send('Input the name, plz...');
    return;
  }
  res.send({ id, name });
});

let users = [{ id: 1, name: '훈이', email: 'iamhoon@gmail.com' }];

app.post('/users', (req, res) => {
  const { email, name } = req.body;
  const id = Math.max(...users.map(({ id }) => id), 0) + 1;
  const user = { id, name, email };
  users.push(user);
  res.status(200).send(user);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.patch('/users/:id', (req, res) => {
  const { id: userId } = req.params;
  const { email, name } = req.body;
  const user = users.find(({ id }) => id === +userId);
  if (!user) {
    return res.status(404).send({ message: 'Not Found User' });
  }
  user.email = email;
  user.name = name;
  res.send(user);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = [...users.filter((user) => user.id !== +id)]; // 주소창의 id는 string type이라 number type으로 변환 필요
  res.send({ message: 'OK' });
});

const PORT = 7007;
app.listen(PORT, () => {
  console.log(`Server's started on ${PORT}...`);
  console.log('http://localhost:7007');
});
