const users = require('./users/users.service.js');
const etcThing = require('./etc_thing/etc_thing.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(etcThing);
};
