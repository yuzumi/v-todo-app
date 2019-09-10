export default {
  getTodoById: ({ todos }) => id => {
    return todos.find(todo => todo.id === id);
  },
  getTodoIndexById: ({ todos }) => id => {
    return todos.findIndex(todo => todo.id === id);
  }
};
