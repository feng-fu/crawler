'use strict';
const Controller = require('egg').Controller;

module.exports = class AbstractController extends Controller {
  success(result) {
    this.ctx.body = {
      result,
      res: 0,
    };
  }
  serverError(error) {
    const msg = error && error.message ? error.message : 'server error.';
    this.ctx.body = {
      msg,
      res: 700,
    };
  }
  paramsError(msg = '参数错误') {
    this.ctx.status = 422
    this.ctx.body = {
      code: 701,
      msg,
    };
  }
};
