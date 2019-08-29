<template lang="pug">
  button(:class="finalClass" @click="$emit('click')")
    slot
</template>

<script>
export default {
  name: "button",
  props: {
    modificators: {
      type: String,
      default: ""
    }
  },
  computed: {
    finalClass() {
      return [
        "btn",
        ...this.modificators.split(" ").map(modificator => `btn-${modificator}`)
      ].join(" ");
    }
  }
};
</script>
