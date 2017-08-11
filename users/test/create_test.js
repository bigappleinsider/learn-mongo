const assert = require('assert');
const User = require('../src/user');
const mongoose = require('mongoose');

describe('Creating records', (done) => {
  it('saves a user', (done) => {
    //assert(1===1);
    const joe = new User({ name: 'Joe' });

    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
      });

  });
});
