<template>
  <nav class="navbar navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">
      <i class="fas fa-home"></i>
    </router-link>
    <div class="ml-auto">
      <Nav />
    </div>
  </nav>
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
