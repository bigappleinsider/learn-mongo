const mongoose  = require('mongoose');

mongoose.Promise = global.Promise;

//only executed once for test suite
before((done) => {
  mongoose.connection.openUri('mongodb://localhost/users_test')
    .once('open', () => {
      console.log('Good to go!');
      done();
    })
    .on('error', (error) => {
      console.log('Warning', error);
    });
})

beforeEach((done) => {
  //done callback
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test!
    done();
  });
});
