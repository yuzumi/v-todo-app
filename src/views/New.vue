<template>
  <div class="col-xs-12 col-sm-10 col-md-8 col-lg-5 mx-auto">
    <TodoCreator />
  </div>
</template>

<script>
import TodoCreator from "@/components/TodoCreator";

export default {
  name: "new",
  components: {
    TodoCreator
  }
};
</script>
