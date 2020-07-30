import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "@/i18n/messages";
import { defaultLocale } from "@/i18n/config";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: defaultLocale,
  messages
});

export default i18n;
