// Initializes the `etc_thing` service on path `/etc-thing`
const { EtcThing } = require('./etc_thing.class');
const createModel = require('../../models/etc_thing.model');
const hooks = require('./etc_thing.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/etc-thing', new EtcThing(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('etc-thing');

  service.hooks(hooks);
};
