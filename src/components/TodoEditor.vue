<template>
  <TodoForm :todo="todo" @submit="onEdit" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TodoForm from "@/components/TodoForm";

export default {
  name: "todo-editor",
  props: {
    todoId: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    ...mapGetters(["getTodoById"]),
    todo() {
      return this.getTodoById(this.todoId);
    }
  },
  methods: {
    ...mapMutations(["editTodo"]),
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
