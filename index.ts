// const express = require('express')
import express from 'express';

const app = express();

app.get('/hello', (_req, res) => {
  res.send(`
  <h1>Hello Full stack</h1>
  `);
});


app.post('./calculator', (req, res) => {
  const { value1, value2, op } = req.body
  const value3: any = 1

  const result = calculator(value1, value2, op) + value3
  res.send(result)
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
