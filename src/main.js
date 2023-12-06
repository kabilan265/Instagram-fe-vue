import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './styles/app.css'
import axiosConfig from './services/AxiosConfig';
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'

createApp(App).use(router).use(store).use(axiosConfig).use(new VueSocketIO({
    debug: true,
    connection: SocketIO('https://instagram-be-nodejs.onrender.com'), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    },
    options: { path: "./components/" }
  })
).mount("#app");
