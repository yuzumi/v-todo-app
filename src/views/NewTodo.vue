<template lang="pug">
  div(class="col-xs-12 col-sm-10 col-md-8 col-lg-5 mx-auto")
    TodoCreator
</template>

<script>
import TodoCreator from "@/components/todo/Creator";

export default {
  name: "new-todo",
  components: {
    TodoCreator
  }
};
</script>
