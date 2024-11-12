const express = require('express');
const app = express();
//const bodyParser = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/ttt', (req, res, next) => {
  console.log('/ttt - use!!');
  next();
});

app.get('/ttt/:id', (req, res) => {
  console.log('/ttt - get!!');
  const { id } = req.params;
  const { name } = req.query;
  if (!id || !name) {
    res.status(401).send('Input the name, plz...');
    return;
  }
  res.send({ id, name });
});

app.post('/users', (req, res) => {
  const { email, name } = req.body;
  const id = 1;

  res.status(200).send({ id, email, name });
});

const PORT = 7007;
app.listen(PORT, () => {
  console.log(`Server's started on ${PORT}...`);
  console.log('http://localhost:7007');
});
