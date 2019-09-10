<template lang="pug">
  div(class="app-wrapper")
    //- Header
    header(class="header")
      Navbar
    //- Main
    main(class="main")
      div(class="container pt-5")
        div(class="row")
          transition(name="fade" mode="out-in")
            router-view
    //- Footer
    footer(class="footer")
</template>

<script>
import Navbar from "@/layout/Navbar";

export default {
  name: "app-template",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
