<template>
  <div class="col-xs-12 col-sm-10 col-md-8 col-lg-5 mx-auto">
    <TodoEditor :todoId="id" />
  </div>
</template>

<script>
import TodoEditor from "@/components/TodoEditor";

export default {
  name: "edit",
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
