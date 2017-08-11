const assert = require('assert');
const User = require('../src/user');

describe('Validating records', (done) => {
  it('requires user name', () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === 'Name is required.')
  });

  it('user name is at least 2 characters long', () => {
    const user = new User({ name: 'Al' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === 'Name must be longer than 2 characters.')
  });

  it('dissalows invalid records from being saved', (done) => {
    const user = new User({ name: 'Al' });
    user.save()
      .catch((validationResult) => {
        const { message } = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 characters.')
        done();
      });
  });

});
