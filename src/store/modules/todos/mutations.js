export default {
  addTodo: (state, todoToAdd) => {
    state.todos.push(todoToAdd);
  },
  removeTodo: (state, todoToRemove) => {
    state.todos = state.todos.filter(todo => todo.id !== todoToRemove.id);
  },
  editTodo: (state, todoToEdit) => {
    state.todos = state.todos.map(todo =>
      todo.id === todoToEdit.id ? { ...todo, ...todoToEdit } : todo
    );
  }
};
