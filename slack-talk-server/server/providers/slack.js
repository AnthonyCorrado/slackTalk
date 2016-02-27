var SlackClient = require('slack-api-client');
var apiKey = require('../config').slack.TOKEN;
var request = require('request');
var RSVP = require('rsvp');

var slack = new SlackClient(apiKey);
exports.sendRTM = function(to, body) {
  // slack.api.chat.postMessage({
  //   channel: to,
  //   as_user: 'true',
  //   text: body
  // }, function(err, res) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(res);
  // })
}

exports.getUsers = function() {
  var host = 'https://slack.com',
    path = '/api/users.list',
    query = '?token=',
    token = '<token>';

  return new RSVP.Promise(function(resolve, reject) {
    request.get(host + path + query + token, function(err, res, body) {
      if (err) {
        return console.log('Error: ', err);
      }
      if (res.statusCode !== 200) {
        return  console.log('Invalid Status Code Returned: ', res.statusCode);
      }
      resolve(body);
    });
  });
}