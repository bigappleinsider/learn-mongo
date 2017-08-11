const assert = require('assert');
const User = require('../src/user');

describe('read users', () => {
  let joe;

  beforeEach((done) => {
      joe = new User({ name: 'Joe' });
      joe.save()
        .then(() => done());
  });

  it('finds all users with a name of joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString())
        //console.log(users);
        done();
      });
  });

  it('find user with particular ID', (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user._id.toString() === joe._id.toString());
        assert(user.name === 'Joe');
        done();
      });
  });
});
