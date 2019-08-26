import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
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
  },
  actions: {},
  getters: {
    getTodoById: ({ todos }) => id => {
      return todos.find(todo => todo.id === id);
    },
    getTodoIndexById: ({ todos }) => id => {
      return todos.findIndex(todo => todo.id === id);
    }
  }
});
