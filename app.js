import express from 'express';

const app = express();
const port = 3000;

// Return pong when pinged
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/version', (req, res) => {
    res.json({
        version: process.env.VERSION  || ''
    });
});

const server = app.listen(port, () => {
  console.log(`CTS is listening on: ${port}`);
});

export { app as default, server };