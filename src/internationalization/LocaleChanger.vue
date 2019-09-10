<template lang="pug">
  form(class="form locale-changer")
    div(class="form-group mb-0")
      select(class="form-control" v-model="$i18n.locale")
        option(v-for="locale in locales" :key="locale" :value="locale")
          | {{locale}}
</template>

<script>
import { locales } from "@/internationalization/config";

export default {
  name: "locale-changer",
  computed: {
    locales() {
      return locales;
    }
  }
};
</script>
