const express = require('express');
const parser = require('body-parser');
const save = require('../database/index.js');
const githubapi = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.username);
  githubapi.getReposByUsername(req.body.username, (data) => {
      save.save(data);
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

