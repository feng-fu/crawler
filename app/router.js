'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/v1/duanzi/getDetail', controller.home.content);


  router.get('/v1/article/today', controller.article.today);
  router.get('/v1/article/random', controller.article.random);
  router.get('/v1/article/date', controller.article.byDate);

  router.get('/v1/video/getList', controller.video.getList);
  router.get('/v1/video/getTopLine', controller.video.getTopLine);
  router.get('/v1/one', controller.one.proxyOneRequest);
  router.get('/v1/weather', controller.weather.getWeather);
  router.post('/v1/two', controller.one.usePost);
};
