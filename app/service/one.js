'use strict';

const Service = require('egg').Service;
const path = 'http://v3.wufazhuce.com:8000/';
class OneService extends Service {
  async proxyOneRequest(url) {
    const r = await this.ctx.curl(`${path}${url}`);
    return JSON.parse(r.data);
  }
}

module.exports = OneService;
