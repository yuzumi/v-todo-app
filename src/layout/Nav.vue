<template>
  <nav class="nav">
    <router-link class="nav-link text-white" to="/">
      <i class="fas fa-pen"></i>
    </router-link>
    <router-link class="nav-link text-white" to="/new">
      <i class="fas fa-plus"></i>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "app-nav"
};
</script>
