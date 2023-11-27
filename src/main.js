import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import  './styles/app.css'
import axiosConfig from './services/AxiosConfig';


createApp(App).use(router).use(store).use(axiosConfig).mount("#app");
