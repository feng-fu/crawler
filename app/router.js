'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/v1/duanzi/getDetail', controller.home.content);

  router.get('/v1/video/getList', controller.video.getList);
  router.get('/v1/video/getTopLine', controller.video.getTopLine);
  router.get('/v1/one', controller.one.proxyOneRequest);
};
