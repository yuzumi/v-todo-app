<template lang="pug">
  nav(class="navbar navbar-dark bg-primary")
    router-link(class="navbar-brand" to="/")
      icon(name="home")
    div(class="ml-auto")
      navigation
    div(class="ml-2")
      locale-changer
</template>

<script>
import Navigation from "@/layout/Navigation";
import Icon from "@/components/shared/Icon";
import LocaleChanger from "@/i18n/LocaleChanger";

export default {
  name: "app-navbar",
  components: {
    Icon,
    Navigation,
    LocaleChanger
  }
};
</script>
