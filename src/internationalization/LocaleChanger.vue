<template lang="pug">
  form(class="form locale-changer")
    div(class="form-group mb-0")
      select(class="form-control" v-model="$i18n.locale")
        option(v-for="language in languages" :key="language" :value="language")
          | {{language}}
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      languages: ["en", "ua"]
    };
  }
};
</script>
