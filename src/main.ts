import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import globalComponents from "./global-components";
import utils from "./utils";
import "./libs";
import VuelidatePlugin from "@vuelidate/core";
import VueFinalModal from "vue-final-modal";

// SASS Theme
import "./assets/sass/app.scss";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VuelidatePlugin)
  .use(VueFinalModal());
globalComponents(app);
utils(app);
app.mount("#app");
