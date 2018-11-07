'use strict';

const AbstractController = require('./abstract');

const rules = {
  name: 'string',
}

class HomeController extends AbstractController {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async validateaa() {
    try {
      await this.ctx.validate(rules)
      this.ctx.body = '12222'
    } catch(e) {
      this.paramsError(e)
    }
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
