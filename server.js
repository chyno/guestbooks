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
  //  server.use(bodyParser.urlencoded({ extended: false }))
  server.get('/api/guestbooks', (req, res) => {
    console.log('welcome to the api!!')
    res.json(guestbooks);
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('/api/guestbook', (req, res) => {
     console.log(req.body);
    guestbooks.push(req.body);
    res.send('success');
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000');
  });
})