'use strict'
const AbstractController = require('./abstract');
const isUuid = require('uuid-validate');
const todoRule = {
  title: {
    type: 'string',
    required: true
  },
  content: {
    type: 'string',
    required: true
  }
}

module.exports = class TodoController extends AbstractController {
  async add() {
    this.ctx.validate(todoRule);
    const { body } = this.ctx.request;
    const todo = await this.service.todo.add(body.title, body.content);
    this.success(todo);
  }
  async del() {
    const { ctx, service } = this
    const { id } = ctx.params
    if (!isUuid(id, 4)) {
      return this.paramsError('错误的id')
    }
    const todo = await service.todo.getFullTodo(id);
    if (!todo) {
      return this.paramsError('todo不存在或者已经被删除');
    }
    todo.deleted = true;
    await todo.save();
    return this.success('删除成功');
  }
  async changeStatus() {
    const { ctx, service } = this
    const { id } = ctx.params
    if (!isUuid(id, 4)) {
      return this.paramsError('错误的id')
    }
    const todo = await service.todo.getFullTodo(id);
    if (!todo) {
      return this.paramsError('todo不存在或者已经被删除');
    }
    todo.done = !todo.done;
    await todo.save();
    return this.success('更新成功');
  }
}