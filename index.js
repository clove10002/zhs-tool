const express = require('express');
const app = express();

app.get('/', (req, res) => {
  /*readFile('./index.html', 'utf8', (err, html) => {
    res.send(html);
  });*/
  res.send("helos");
});

app.listen(process.env.PORT || 3000, () => console.log('App available'))
