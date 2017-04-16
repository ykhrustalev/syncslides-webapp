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
  PREV_SLIDE (state) {
    if (state.slideNumber > 1) {
      state.slideNumber--;
    }
  },
  NEXT_SLIDE (state) {
    if (state.slideNumber < state.slidesUrls.length) {
      state.slideNumber++;
    }
  },
  SET_SLIDE_NUM (state, rawVal) {
    let val = parseInt(rawVal);
    if (isNaN(val)) {
      return;
    }

    if (val < 1) {
      val = 1;
    } else if (val > state.slidesUrls.length) {
      val = state.state.slidesUrls.length;
    }

    state.slideNumber = val;
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
  setSpecificSlide ({ commit, dispatch }, value) {
    commit('SET_SLIDE_NUM', value);
    dispatch('requestSlide')
  },
  requestSlide ({ commit, state }) {
    presenter.getSlideContents(
      state.slidesUrls[state.slideNumber-1],
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
        commit('SET_SLIDE_NUM', 1);
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
