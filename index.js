const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
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
