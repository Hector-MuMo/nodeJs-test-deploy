const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Página incial: Bienvenido' });
});
app.get('/api/v1/users', (req, res) => {
  res.json([
    {
      id: '1',
      firstname: 'Bruno',
      lastname: 'Scaletta',
      email: 'brusca@gmail.com',
    },
  ]);
});
app.get('/api/v1/info', (req, res) => {
  res.json({ description: 'Primera app desplegada de nodeJS' });
});

module.exports = app;
