'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523244455399_8206';
  config.security = {
    csrf: false,
  };

  // mongo config
  config.mongoose = {
    url: 'mongodb://localhost:27017/todo',
    config: {}
  }
  
  // add your config here
  config.middleware = ['errorHandle'];

  errorHandle: {
    match: "/todo"
  }


  return config;
};
