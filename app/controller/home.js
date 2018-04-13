'use strict';

const AbstractController = require('./abstract');

class HomeController extends AbstractController {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async content() {
    const { url } = this.ctx.query;
    try {
      const result = await this.ctx.service.crawler.getContent(url);
      return this.success(result);
    } catch (error) {
      return this.serverError(error);
    }
  }
}

module.exports = HomeController;
