import express from 'express';
import pkg from './package.json' assert { type: "json" };

const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.send('pong');
});


// app.get('/version', (req, res) => {
//     res.json({
//         version: pkg.version,
//         buildNumber: process.env.CIRCLE_BUILD_NUM  || ''
//     });
// });

const server = app.listen(port, () => {
  console.log(`CTS is listening on: ${port}`);
});

export { app as default, server };