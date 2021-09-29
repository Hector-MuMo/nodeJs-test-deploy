const express = require('express');

const app = express();

app.get('api/v1/', () => {
  res.json({ message: 'Página incial: Bienvenido' });
});
app.get('api/v1/users', () => {
  res.json([
    {
      id: '1',
      firstname: 'Bruno',
      lastname: 'Scaletta',
      email: 'brusca@gmail.com',
    },
  ]);
});
app.get('api/v1/info', () => {
  res.json({ description: 'Primera app desplegada de nodeJS' });
});

module.exports = app;
