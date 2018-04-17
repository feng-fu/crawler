'use strict';
const AbstractController = require('./abstract');

class VideoController extends AbstractController {
  async getList() {
    try {
      return this.success((await this.ctx.service.video.getVideoList()).toString());
    } catch (error) {
      this.ctx.logger.error(`error: ${error.stack}`);
      return this.serverError(error);
    }
  }
  async getTopLine() {
    try {
      return this.success(JSON.parse((await this.ctx.service.video.getTopLine()).toString()));
    } catch (error) {
      this.serverError(error);
    }
  }
}

module.exports = VideoController;
