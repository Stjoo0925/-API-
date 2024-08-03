import "./assets/main.css";

import { createApp } from "vue";
import pinia from "./pinia"; // Pinia 플러그인을 가져옵니다.
import axios from "axios";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
