import state from "@/store/modules/todos/state";
import getters from "@/store/modules/todos/getters";
import mutations from "@/store/modules/todos/mutations";

import { createNamespacedHelpers } from "vuex";

export const todosModule = createNamespacedHelpers("todos");

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
