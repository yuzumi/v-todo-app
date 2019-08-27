<template lang="pug">
  div(class="col")
    TodoList
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
