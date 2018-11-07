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
  paramsError(msg) {
    this.ctx.body = {
      res: 701,
      msg: msg,
    };
  }
};
