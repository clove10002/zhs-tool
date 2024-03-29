const express = require('express');
const fs = require('fs')
const app = express();

app.get('/', (req, res) => {
  fs.readFile('./index.html', 'utf8', (err, html) => {
    res.send(html);  
  });      
});

app.listen(process.env.PORT || 3000, () => console.log('App available'));
