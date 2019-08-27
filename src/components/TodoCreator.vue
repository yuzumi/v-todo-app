<template lang="pug">
  TodoForm(:todo="todo" @submit="onSubmit")
</template>

<script>
import { mapMutations } from "vuex";
import Todo from "@/models/Todo";
import TodoForm from "@/components/TodoForm";
import getDefaultTodoState from "@/utils/getDefaultTodoState";

export default {
  name: "todo-creator",
  data() {
    return {
      todo: { ...getDefaultTodoState() }
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    onSubmit() {
      this.addTodo(new Todo(this.todo));

      this.$router.push("/");
    }
  },
  components: {
    TodoForm
  }
};
</script>
