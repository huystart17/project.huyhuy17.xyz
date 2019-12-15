// Initializes the `jobcrawl` service on path `/jobcrawl`
const { Jobcrawl } = require('./jobcrawl.class');
const createModel = require('../../models/jobcrawl.model');
const hooks = require('./jobcrawl.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/jobcrawl', new Jobcrawl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('jobcrawl');

  service.hooks(hooks);
};
