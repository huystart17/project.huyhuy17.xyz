const assert = require('assert');
const app = require('../../src/app');

describe('\'jobcrawl\' service', () => {
  it('registered the service', () => {
    const service = app.service('jobcrawl');

    assert.ok(service, 'Registered the service');
  });
});
