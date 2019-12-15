// Initializes the `product_hunt_list_post` service on path `/product-hunt-list-post`
const { ProductHuntListPost } = require('./product_hunt_list_post.class');
const createModel = require('../../models/product_hunt_list_post.model');
const hooks = require('./product_hunt_list_post.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),

  };

  // Initialize our service with any options it requires
  app.use('/product-hunt-list-post', new ProductHuntListPost(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product-hunt-list-post');

  service.hooks(hooks);
};
