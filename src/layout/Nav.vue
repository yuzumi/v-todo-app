<template lang="pug">
  nav(class="nav")
    router-link(class="nav-link text-white" to="/")
      i(class="fas fa-pen")
    router-link(class="nav-link text-white" to="/new")
      i(class="fas fa-plus")
</template>

<script>
export default {
  name: "app-nav"
};
</script>
