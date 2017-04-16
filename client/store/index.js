import Vue from 'vue'
import Vuex from 'vuex'
import presenter from '../api/presenter'

Vue.use(Vuex);

const state = {
  slideNumber: 0,
  slideContents: '',
  slidesUrls: [],
  // TODO: render error
  errorMessage : null
};

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  PREV_SLIDE (state) {
    if (state.slideNumber > 0) {
      state.slideNumber--;
    }
  },
  NEXT_SLIDE (state) {
    if (state.slideNumber + 1 < state.slidesUrls.length) {
      state.slideNumber++;
    }
  },

  SET_SLIDE_CONTENTS (state, html) {
    state.slideContents = html
  },

  SET_SLIDE_URLS (state, slideUrls) {
    state.slidesUrls = slideUrls
  },
  SET_ERROR (state, message) {
    state.errorMessage = message
  }
};

const actions = {
  nextSlide ({ commit, dispatch }) {
    commit('NEXT_SLIDE');
    dispatch('requestSlide')
  },
  prevSlide ({ commit, dispatch }) {
    commit('PREV_SLIDE');
    dispatch('requestSlide')
  },
  requestSlide ({ commit, state }) {
    presenter.getSlideContents(
      state.slidesUrls[state.slideNumber],
      (resp) => commit('SET_SLIDE_CONTENTS', resp.body),
      (resp) => commit('SET_ERROR', resp.body)
    )
  },
  init ({ commit, dispatch }) {
    // TODO: here need an id
    presenter.getSlidesList(
      123,
      function(urls) {
        commit('SET_SLIDE_URLS', urls);
        dispatch('requestSlide');
      },
      (message) => commit('SET_ERROR', message)
    )
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store
