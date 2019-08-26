<template>
  <div class="app-wrapper">
    <header class="header">
      <Navbar />
    </header>
    <main class="main">
      <div class="container pt-5">
        <div class="row">
          <router-view />
        </div>
      </div>
    </main>
    <footer class="footer"></footer>
  </div>
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
