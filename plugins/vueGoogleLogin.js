import { LoaderPlugin } from "vue-google-login";
import Vue from "vue";
Vue.use(LoaderPlugin, {
  client_id: process.env.KEY_GG
});
