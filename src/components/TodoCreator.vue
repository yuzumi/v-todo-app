<template>
  <TodoForm :todo="todo" @submit="onSubmit" />
</template>

<script>
import { mapMutations } from "vuex";
import Todo from "@/models/Todo";
import TodoForm from "@/components/TodoForm";

export default {
  name: "todo-creator",
  data() {
    return {
      todo: {
        title: "",
        descrption: "",
        done: false
      }
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
