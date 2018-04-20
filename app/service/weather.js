'use strict';
const key = '840618a5ab694bb2a1188b25b4075eca';
const url = 'https://free-api.heweather.com/s6/weather/now';


const Service = require('egg').Service;
class WeatherService extends Service {
  async getWeather(location) {
    const res = await this.app.curl(`${url}/?location=${location}&key=${key}`, {
      dataType: 'json',
    });
    if (res && res.status === 200) {
      return res.data;
    }
    throw new Error(res);
  }
}

module.exports = WeatherService;
