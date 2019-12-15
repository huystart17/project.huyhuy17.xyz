const assert = require('assert');
const app = require('../../src/app');

describe('\'product_hunt_list_post\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-hunt-list-post');

    assert.ok(service, 'Registered the service');
  });
});
