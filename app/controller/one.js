'use strict';
const AbstractController = require('./abstract');

class OneService extends AbstractController {
  async proxyOneRequest() {
    const { url } = this.ctx.query;
    if (!url) return this.paramsError();
    try {
      const r = await this.ctx.service.one.proxyOneRequest(url);
      this.ctx.body = r;
    } catch (error) {
      return this.serverError(error);
    }
  }
  async usePost() {
    const { url } = this.ctx.request.body;
    if (!url) return this.paramsError();
    try {
      const r = await this.ctx.service.one.proxyOneRequest(url);
      this.ctx.body = r;
    } catch (error) {
      return this.serverError(error);
    }
  }
  async proxyDaily() {
    const { url } = this.ctx.request.body;
    if (!url) return this.paramsError();
    try {
      const r = await this.ctx.service.one.proxyDaily(url);
      this.ctx.body = r;
    } catch (error) {
      return this.serverError(error);
    }
  }
}

module.exports = OneService;
