var rtm = require('../controllers/rtm');

module.exports = function(app) {

  app.post('/sendRTM', rtm.create);
  app.get('/contacts', rtm.users)
};