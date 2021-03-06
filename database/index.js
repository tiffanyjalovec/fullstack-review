const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
 id: Number,
 name: String,
 owner_id: Number,
 stargazers_count: Number

});


let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  var row = new Repo({
    id: data[0].id,
    name: data[0].name,
    owner_id: data[0].owner.id,
    stargazers_count: data[0].stargazers_count
  });

  row.save(function(err, data) {
    if (err) {
      console.log('error in save', err);
    } else {
      console.log('sent to mongoose!');
    }
  })

};

module.exports.save = save;