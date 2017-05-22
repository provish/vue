import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// defining store
const store = new Vuex.Store({
  state: {
    registered: [{
      text: "Hello"
    }, {
      text: "Welcome"
    }, {
      text: "Hi!!"
    }],
    unregistered: []
  },
  getters: {
    getRegistered(state) {
      return state.registered;
    },
    getUnregistered(state) {
      return state.unregistered;
    }
  },
  mutations: {
    register: function(state, payload) {
      console.log(payload);
      const obj = state.unregistered.find(function(item) {
        console.log(item);
        return item.text == payload.text;
      });
      if (obj) {
        state.registered.push(obj);
        state.unregistered.splice(state.unregistered.indexOf(obj), 1);
      }
    },
    unregister: function(state, payload) {
      const obj = state.registered.find(item => {
        return item.text == payload.text;
      });
      if (obj) {
        state.unregistered.push(obj);
        state.registered.splice(state.registered.indexOf(obj), 1);
      }
    }
  },
  actions: {
    register: function(context, text) {
      console.log('actions', context, text);
      context.commit('register', {
        text
      });
    },
    unregister: function(context, text) {
      context.commit('unregister', {
        text
      });
    }
  }
});
console.log('inside store', store);

// exporting store
export default store
