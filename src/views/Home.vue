<template>
  <div class="col">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: "home",
  components: {
    TodoList
  }
};
</script>
