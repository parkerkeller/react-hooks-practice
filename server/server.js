const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const { createUser, findUser } = require('./controllers/userController');
const { getBills, createBill, updateBill, deleteBill } = require('./controllers/billsController');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.post('/signin', findUser, (req, res) => {
  res.json({ result: res.locals.result, username: res.locals.username });
});

app.post('/signup', createUser, (req, res) => {
  res.json(res.locals.result);
});

app.get('/bills', getBills, (req, res) => {
  console.log(res.locals.bills)
  res.json(res.locals.bills)
})

app.post('/bills', createBill, (req, res) => {
  res.json(res.locals.bill)
})

app.delete('/bills', deleteBill, (req, res) => {
  res.json({ message: 'success' })
})

app.patch('/bills', updateBill, (req, res) => {
  res.json(res.locals.bill)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))