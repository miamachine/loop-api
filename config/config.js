var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'loop-api'
    },
    port: 3000,
    db: 'mongodb://localhost/loop-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'loop-api'
    },
    port: 3000,
    db: 'mongodb://localhost/loop-api-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'loop-api'
    },
    port: 3000,
    db: 'mongodb://localhost/loop-api-production'
  }
};

module.exports = config[env];
