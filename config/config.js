var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:12345@10.10.10.193:3306/test_node'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/test-production'
  }
};

module.exports = config[env];
