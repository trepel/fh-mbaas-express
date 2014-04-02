var proxyquire =  require('proxyquire').noCallThru(),
application, ditchMock, authMock;
var assert = require('assert');

exports.setUp = function(finish){
  require('./fixtures/env.js');
  ditchMock = require('./fixtures/db');
	authMock = require('./fixtures/authcall.js');
  application = proxyquire('./fixtures/application.js', {
    'fh-webapp': require('../lib/webapp.js'),
    'main.js' : require('./fixtures/main.js'),
    'fh-api' : require('../test/fixtures/mockAPI.js')
  });
  finish();
};

exports.tearDown = function(finish){
  application.close();
  ditchMock.done();
  authMock.done();
  finish();
};