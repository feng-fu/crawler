module.exports = app => {
    const { controller, router } = app;
    const v1Router = router.namespace('/v1');
    v1Router.get('/duanzi/getDetail', controller.home.content);
    v1Router.get('/article/today', controller.article.today);
    v1Router.get('/article/random', controller.article.random);
    v1Router.get('/article/date', controller.article.byDate);
    v1Router.get('/video/getList', controller.video.getList);
    v1Router.get('/video/getTopLine', controller.video.getTopLine);
    v1Router.get('/one', controller.one.proxyOneRequest);
    v1Router.get('/weather', controller.weather.getWeather);
    v1Router.post('/two', controller.one.usePost);
    v1Router.post('/daily', controller.one.proxyDaily);
    v1Router.post('/validate', controller.home.validateaa);
}