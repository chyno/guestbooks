const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const guestbooks = [];

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get('/api/guestbooks', (req, res) => {
    res.json(this.guestbooks);
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('/api/guestbook', (req, res) => {
     console.log(req.body);
    this.guestbooks.push(req.body);
    res.send('success');
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000');
  });
})