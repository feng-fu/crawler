module.exports = app => {
  const { controller, router } = app;
  const todoRouter = router.namespace('/todo');
  todoRouter.post('/', controller.todo.add);
  todoRouter.delete('/:id', controller.todo.del);
  todoRouter.get('/change/:id', controller.todo.changeStatus);
}