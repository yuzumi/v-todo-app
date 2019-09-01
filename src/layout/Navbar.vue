<template lang="pug">
  nav(class="navbar navbar-dark bg-primary")
    router-link(class="navbar-brand" to="/")
      i(class="fas fa-home")
    div(class="ml-auto")
      Nav
    div(class="ml-2")
      LocaleChanger
</template>

<script>
import Nav from "@/layout/Nav";
import LocaleChanger from "@/internationalization/LocaleChanger";

export default {
  name: "app-navbar",
  components: {
    Nav,
    LocaleChanger
  }
};
</script>
