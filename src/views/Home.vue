<template lang="pug">
  div(class="col")
    TodoList
</template>

<script>
import TodoList from "@/components/todo/List";

export default {
  name: "home",
  components: {
    TodoList
  }
};
</script>
