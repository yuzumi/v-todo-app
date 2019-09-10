<template lang="pug">
  i(:class="finalСlass")
</template>

<script>
export default {
  name: "icon",
  props: {
    type: {
      type: String,
      default: "fas"
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    finalСlass() {
      return `${this.type} fa-${this.name}`;
    }
  }
};
</script>
