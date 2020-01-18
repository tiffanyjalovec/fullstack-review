const request = require('request');
const config = require('../config.js');

let getReposByUsername = (/* TODO */) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, response, body) => {
    if (err) {
      console.log('Error in getReposByUsername', err);
    } else {
      callback(body);
      //body is the decompressed response body
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;