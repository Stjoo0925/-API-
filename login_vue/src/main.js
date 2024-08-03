import "./assets/css/reset.css";
import "./assets/css/styles.css";
import "./assets/css/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
