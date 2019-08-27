<template lang="pug">
  div(class="app-wrapper")
    //- Header
    header(class="header")
      Navbar
    //- Main
    main(class="main")
      div(class="container pt-5")
        div(class="row")
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
