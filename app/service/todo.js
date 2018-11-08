'use strict';
const Service = require('egg').Service;

class TodoService extends Service {
  async add(title, content) {
    const todo = new this.ctx.model.Todo();
    todo.title = title;
    todo.content = content;
    todo.done = false;
    return await todo.save()
  }
  async getFullTodo(id) {
    const query = { id, deleted: false };
    return this.ctx.model.Todo.findOne(query);
  }
}

module.exports = TodoService;