import express from 'express';

const app = express();
const port = 3000;

app.test.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/dev', (req, res) => {
  res.send('1.0.0');
});

const server = app.listen(port, () => {
  console.log(`CTS is listening on: ${port}`);
});

export { app as default, server };