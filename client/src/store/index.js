import Vue from "vue";
import Vuex from "vuex";
import StorePosts from './modules/StorePosts';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    StorePosts
  }
})

export default store;
