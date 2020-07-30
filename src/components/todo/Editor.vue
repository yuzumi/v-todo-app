<template lang="pug">
  TodoForm(:todo="todo" @submit="onEdit")  
</template>

<script>
import { todosModule } from "@/store/modules/todos";
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
    ...todosModule.mapGetters(["getTodoById"]),
    todo() {
      return this.getTodoById(this.todoId);
    }
  },
  methods: {
    ...todosModule.mapMutations(["editTodo"]),
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
