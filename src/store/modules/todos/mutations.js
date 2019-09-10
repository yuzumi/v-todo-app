export default {
  addTodo: (state, todo) => {
    state.todos.push(todo);
  },
  removeTodo: (state, todo) => {
    const index = state.todos.indexOf(todo);

    index !== -1 && state.todos.splice(index, 1);
  },
  editTodo: (state, editedTodo) => {
    const editedTodos = state.todos.map(todo => {
      return todo.id === editedTodo.id ? { ...todo, ...editedTodo } : todo;
    });

    state.todos = editedTodos;
  }
};
