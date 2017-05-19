import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// defining store
const store = new Vuex.Store({
  state: {
    posts: [{text: "Hello"},{text: "Hello"},{text: "Hello"}],
    deletedPost: []
  },
  getters: {
    getPost(state) {
      return state.posts;
    },
    getDeletedPost(state) {
      return state.deletedPost;
    }
  },
  mutuations: {}
});
console.log('inside store', store);

// exporting store
export default store
