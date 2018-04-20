'use strict';
const AbstractController = require('./abstract');

class WeatherController extends AbstractController {
  async getWeather() {
    try {
      const { location } = this.ctx.query;
      if (!location) this.paramsError();
      const weather = await this.ctx.service.weather.getWeather(location);
      return this.success(weather.HeWeather6[0]);
    } catch (error) {
      return this.serverError();
    }
  }
}

module.exports = WeatherController;
