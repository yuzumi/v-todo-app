<template lang="pug">
  div(class="todo-list")
    ul(class="list-group" v-if="todos.length")
      li(class="list-group-item" v-for="todo in todos" :key="todo.id")
        TodoListItem(:todo="todo" @remove="removeTodo(todo)")
    div(v-else)
      div(class="alert alert-info text-center" role="alert")
        | No todos...
      router-link(class="btn btn-primary btn-sm" to="/new")
        | Add todo
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
