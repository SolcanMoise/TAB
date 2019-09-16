const express = require('express')
const watch = require('node-watch')
const app = express()
const port = 3000

watch('.', { recursive: true }, function (evt, name) {

  if (evt == 'update') {
    // on create or modify
    console.log('%s changed.', name);
  }

  if (evt == 'remove') {
    // on delete
    console.log('%s deleted.', name);
  }
});

// Upload all static files from current directory
app.use(express.static("./"));

app.get('/', (req, res) => res.sendFile('index.html', { root: '.' }))

app.listen(port, () => console.log(`TAB app listening on port ${port}!`))