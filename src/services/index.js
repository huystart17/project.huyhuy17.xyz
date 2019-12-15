const users = require('./users/users.service.js');
const etcThing = require('./etc_thing/etc_thing.service.js');
const productHuntListPost = require('./product_hunt_list_post/product_hunt_list_post.service.js');
const jobcrawl = require('./jobcrawl/jobcrawl.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(etcThing);
  app.configure(productHuntListPost);
  app.configure(jobcrawl);
};
