<template lang="pug">
  i(:class="finalСlass")
</template>

<script>
export default {
  name: "icon",
  props: {
    type: {
      type: String,
      required: true
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
