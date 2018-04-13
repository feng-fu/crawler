'use strict';
const Service = require('egg').Service;
const cheerio = require('cheerio');

class CrawlerService extends Service {
  async getContent(url) {
    const htmlStr = await this.app.curl(url);
    const $ = cheerio.load(htmlStr.data);
    return $('section.ui-row-flex').text();
  }
}

module.exports = CrawlerService;
