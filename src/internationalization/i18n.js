import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "@/internationalization/messages";
import { defaultLocale } from "../internationalization/config";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: defaultLocale,
  messages
});

export default i18n;
