const assert = require('assert');
const app = require('../../src/app');

describe('\'etc_thing\' service', () => {
  it('registered the service', () => {
    const service = app.service('etc-thing');

    assert.ok(service, 'Registered the service');
  });
});
