const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var hh = "";
  readFile('./index.html', 'utf8', (err, html) => {
    hh = html;
  });
  res.send(hh);        
});

app.listen(process.env.PORT || 3000, () => console.log('App available'));
