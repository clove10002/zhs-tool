/*const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
app.get('/', (request, response) => {
  readFile('./index.html', 'utf8', (err, html)) = {
    if(err){
      response.status(500).send("error 500!");
    }
    response.send(html);
  }
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
