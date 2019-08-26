<template>
  <div class="todo-list">
    <ul class="list-group" v-if="todos.length">
      <li class="list-group-item" v-for="todo in todos" :key="todo.id">
        <TodoListItem :todo="todo" @remove="removeTodo(todo)" />
      </li>
    </ul>
    <div v-else>
      <div class="alert alert-info text-center" role="alert">No todos...</div>
      <router-link class="btn btn-primary btn-sm" to="/new"
        >Add todo</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TodoListItem from "@/components/TodoListItem";

export default {
  name: "todo-list",
  computed: {
    ...mapState(["todos"])
  },
  methods: {
    ...mapMutations(["removeTodo"])
  },
  components: {
    TodoListItem
  }
};
</script>
