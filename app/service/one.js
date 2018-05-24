'use strict';

const Service = require('egg').Service;
const path = 'http://v3.wufazhuce.com:8000/';
const dailyPath = 'https://news-at.zhihu.com';
class OneService extends Service {
  async proxyOneRequest(url) {
    const r = await this.ctx.curl(`${path}${url}`, {
      // dataType: 'json',
    });
    if (r && r.status === 200) return r.data;
    throw new Error(r);
  }
  async proxyDaily(url) {
    const r = await this.ctx.curl(`${dailyPath}${url}`, {});
    if (r && r.status === 200) return r.data;
    throw new Error(r);
  }
}

module.exports = OneService;
