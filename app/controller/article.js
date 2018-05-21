'use strict';
const AbstractController = require('./abstract');

class ArticleController extends AbstractController {
  async today() {
    try {
      const { data } = await this.ctx.service.article.getTodayArticle();
      console.log(data);
      this.success(JSON.parse(data).data);
    } catch (error) {
      this.serverError(error);
    }
  }
  async random() {
    try {
      const { data } = await this.ctx.service.article.getRandomArticle();
      this.success(JSON.parse(data).data);
    } catch (error) {
      this.serverError(error);
    }
  }
  async byDate() {
    try {
      const { date } = this.ctx.query;
      if (!date) return this.paramsError();
      const { data } = await this.ctx.service.article.getArticleByDate();
      this.success(JSON.parse(data).data);
    } catch (error) {
      this.serverError(error);
    }
  }
}

module.exports = ArticleController;
