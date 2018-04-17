'use strict';
const Service = require('egg').Service;
const moment = require('moment');
const requestHeader = {
  'X-Channel-Code': 'official',
  'X-Client-Agent': 'Xiaomi',
  'X-Client-Hash': '2f3d6ffkda95dlz2fhju8d3s6dfges3t',
  'X-Client-ID': '123456789123456',
  'X-Client-Version': '2.3.2',
  'X-Long-Token': '',
  'X-Platform-Type': '0',
  'X-Platform-Version': '5.0',
  'X-Serial-Num': moment().unix(),
  'X-User-ID': '',
};

const requestUrl = 'http://app.pearvideo.com/clt/jsp/v2/';

class VideoService extends Service {
  async getVideoList() {
    const res = await this.app.curl(`${requestUrl}getCategorys.jsp`, {
      method: 'POST',
      headers: requestHeader,
    });
    return res.data;
  }
  async getTopLine() {
    const res = await this.app.curl(`${requestUrl}home.jsp?lastLikeIds=1063871%2C1063985%2C1064069%2C1064123%2C1064078%2C1064186%2C1062372%2C1064164%2C1064081%2C1064176%2C1064070%2C1064019`, {
      method: 'POST',
      headers: requestHeader,
    });
    return res.data;
  }
  async getDetail() {
    const res = await this.app.curl(`${requestUrl}getCategoryConts?hotPageidx=1&categoryId=1`, {
      method: 'POST',
      headers: requestHeader,
    });
    return res.data;
  }
}

module.exports = VideoService;
