<template>
  <div class="app" id="app">
    <Template />
  </div>
</template>

<style>
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
@import "assets/styles/index.css";
</style>

<script>
import Template from "@/layout/Template";

export default {
  name: "app",
  components: {
    Template
  }
};
</script>
