<template lang="pug">
  TodoForm(:todo="todo" @submit="onEdit")  
</template>

<script>
import { namespacedHelpers } from "@/store/modules/todos";
import TodoForm from "@/components/todo/Form";

export default {
  name: "todo-editor",
  props: {
    todoId: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    ...namespacedHelpers.mapGetters(["getTodoById"]),
    todo() {
      return this.getTodoById(this.todoId);
    }
  },
  methods: {
    ...namespacedHelpers.mapMutations(["editTodo"]),
    onEdit() {
      this.editTodo(this.todo);

      this.$router.push("/");
    }
  },
  components: {
    TodoForm
  }
};
</script>
