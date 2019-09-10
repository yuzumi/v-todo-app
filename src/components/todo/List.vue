<template lang="pug">
  div(class="todo-list")
    ul(class="list-group" v-if="todos.length")
      li(class="list-group-item" v-for="todo in todos" :key="todo.id")
        TodoListItem(:todo="todo" @remove="removeTodo(todo)")
    div(v-else)
      div(class="alert alert-info text-center" role="alert")
        | {{$t("todo.no")}}
      router-link(class="btn btn-primary btn-sm" to="/new")
        | {{$t("todo.add")}}
</template>

<script>
import { namespacedHelpers } from "@/store/modules/todos";
import TodoListItem from "@/components/todo/ListItem";

export default {
  name: "todo-list",
  computed: {
    ...namespacedHelpers.mapState(["todos"])
  },
  methods: {
    ...namespacedHelpers.mapMutations(["removeTodo"])
  },
  components: {
    TodoListItem
  }
};
</script>
