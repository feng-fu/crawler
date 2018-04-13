'use strict';
const Controller = require('egg').Controller;

module.exports = class AbstractController extends Controller {
  success(result) {
    this.ctx.body = {
      result,
      code: 0,
    };
  }
  serverError(error) {
    const msg = error && error.message ? error.message : 'server error.';
    this.ctx.body = {
      msg,
      code: 1,
    };
  }
  paramsError() {
    this.ctx.body = {
      code: 2,
      msg: 'params error.',
    };
  }
};
