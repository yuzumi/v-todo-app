<template lang="pug">
  todo-form(:todo="todo" @submit="onSubmit")
</template>

<script>
import { todosModule } from "@/store/modules/todos";
import Todo from "@/models/Todo";
import TodoForm from "@/components/todo/Form";

export default {
  name: "todo-creator",
  data() {
    return {
      todo: Todo.getDefaultState()
    };
  },
  methods: {
    ...todosModule.mapMutations(["addTodo"]),
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
