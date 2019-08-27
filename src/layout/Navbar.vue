<template lang="pug">
  nav(class="navbar navbar-dark bg-primary")
    router-link(class="navbar-brand" to="/")
      i(class="fas fa-home")
    div(class="ml-auto")
      Nav
</template>

<script>
import Nav from "@/layout/Nav";

export default {
  name: "app-navbar",
  components: {
    Nav
  }
};
</script>
