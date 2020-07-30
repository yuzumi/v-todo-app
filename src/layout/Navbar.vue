<template lang="pug">
  nav(class="navbar navbar-dark bg-primary")
    router-link(class="navbar-brand" to="/")
      Icon(name="home")
    div(class="ml-auto")
      Nav
    div(class="ml-2")
      LocaleChanger
</template>

<script>
import Nav from "@/layout/Nav";
import Icon from "@/components/shared/Icon";
import LocaleChanger from "@/i18n/LocaleChanger";

export default {
  name: "app-navbar",
  components: {
    Nav,
    Icon,
    LocaleChanger
  }
};
</script>
