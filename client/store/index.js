import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 0,
  pageNumber: 0,

  slides: [
    'http://localhost:8081/presentation1/1.html',
    'http://localhost:8081/presentation1/2.html'
  ]
};

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  PREV_PAGE (state) {
    if (state.pageNumber > 0) {
      state.pageNumber--;
    }
  },
  NEXT_PAGE (state) {
    // TODO: track max value
    if (state.pageNumber + 1 < state.slides.length) {
      state.pageNumber++;
    }
  },
  SET_PAGE (state, pageNumber) {
    state.pageNumber = pageNumber;
  }
};

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store
