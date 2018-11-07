'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523244455399_8206';
  config.security = {
    csrf: false,
  };

  config.validate = {};

  // add your config here
  config.middleware = [];

  return config;
};
