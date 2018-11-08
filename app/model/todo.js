'use strict';
const uuidv4 = require('uuid/v4');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TodoSchema = new Schema({
    title: { type: String },
    content: { type: String },
    done: { type: Boolean },
    id: { type: String, default: () => uuidv4() },
    deleted: { type: Boolean, default: false },
  });

  TodoSchema.index({ id: 1, deleted: true });

  return mongoose.model('Todo', TodoSchema);
};