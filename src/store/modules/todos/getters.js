import { isSameId } from "@/store/modules/todos/utils";

export default {
  hasTodos: ({ todos }) => {
    return todos.length > 0;
  },
  getTodoById: ({ todos }) => id => {
    return todos.find(isSameId(id));
  },
  getTodoIndexById: ({ todos }) => id => {
    return todos.findIndex(isSameId(id));
  }
};
