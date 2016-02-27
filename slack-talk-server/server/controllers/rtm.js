var rtmProvider = require('../providers/slack');
var RSVP = require('rsvp');

exports.create = function (req, res, next) {
  console.log(req.body);
  var to = req.body.to;
  var payload = req.body.payload;
  rtmProvider.sendRTM(to, payload);
}

exports.users = function (req, res, next) {
  console.log('made it to list');
  var promise = new RSVP.Promise(function(resolve, reject){
    rtmProvider.getUsers()
      .then(function(data) {
        var parsedData = JSON.parse(data)
        console.log(parsedData.members);
        res.send(parsedData.members);
      })
  });
}