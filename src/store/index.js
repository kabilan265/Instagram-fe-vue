import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
})
export default new Vuex.Store({
  state: {
    userName: "dsssss",
  },
  mutations: {
  },
  plugins: [vuexLocal.plugin]
})