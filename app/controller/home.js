'use strict';

const AbstractController = require('./abstract');

class HomeController extends AbstractController {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async content() {
    const { url } = this.ctx.query;
    if (!url) return this.paramsError();
    try {
      const result = await this.ctx.service.crawler.getContent(url);
      return this.success(result);
    } catch (error) {
      this.ctx.logger.error(`error: ${error.stack}`);
      return this.serverError(error);
    }
  }
}

module.exports = HomeController;
