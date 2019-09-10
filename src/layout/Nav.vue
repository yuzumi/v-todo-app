<template lang="pug">
  nav(class="nav")
    router-link(
      class="nav-link text-white"
      v-for="({ to, icon }) in links"
      :key="to"
      :to="to"
    )
      Icon(:name="icon")
</template>

<script>
import Icon from "@/components/shared/Icon";

export default {
  name: "app-nav",
  data() {
    return {
      links: [
        {
          to: "/",
          icon: "pen"
        },
        {
          to: "/new",
          icon: "plus"
        }
      ]
    };
  },
  components: {
    Icon
  }
};
</script>
