import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* Icons */
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import store, { Key } from "@/store";

import { GlobalState } from "./store/types";

library.add(faSearch, faAngleDown, faAngleUp);

createApp(App)
  .use(store, Key)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
