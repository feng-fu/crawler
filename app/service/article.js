'use strict';
const Service = require('egg').Service;

class ArticleService extends Service {
  async getTodayArticle() {
    return await this.app.curl(`https://interface.meiriyiwen.com/article/today?dev=1`)
  }
  async getRandomArticle() {
      return await this.app.curl(`https://interface.meiriyiwen.com/article/random?dev=1`)
  }
  async getArticleByDate(date) {
      return await this.app.curl(`https://interface.meiriyiwen.com/article/day?dev=1&date=${date}`)
  }
}

module.exports = ArticleService;
