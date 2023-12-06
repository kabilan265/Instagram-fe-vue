import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
})
export default new Vuex.Store({
  state: {
    userName: "",
    userId: "",
    chatDetails: {}
  },
  mutations: {
    setUserName(state, val) {
      state.userName = val;
    },
    setUserId(state, val) {
      state.userId = val;
    },
    setChatDetails(state, val) {
      state.chatDetails = val;
    }
  },
  plugins: [vuexLocal.plugin]
})