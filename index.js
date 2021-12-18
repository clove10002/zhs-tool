//const http = require('http');
const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  readFile('./index.html' 'utf8', (err, html) => {
    if(err){
      res.status(500).send("error 500!");
    }
    res.send(html);    
  })
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
