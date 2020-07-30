<template lang="pug">
  div(class="col-xs-12 col-sm-10 col-md-8 col-lg-5 mx-auto")
    TodoEditor(:todoId="id")
</template>

<script>
import TodoEditor from "@/components/todo/Editor";

export default {
  name: "edit-todo",
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  components: {
    TodoEditor
  }
};
</script>
