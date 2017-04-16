import Vue from 'vue'

const _slides = [
  'http://localhost:8081/presentation1/1.html',
  'http://localhost:8081/presentation1/2.html',
  'http://localhost:8081/presentation1/3.html',
];

export default {
  getSlidesList(presentationId, success, error) {
    success(_slides)
  },

  getSlideContents (url, success, error) {
    Vue.http.get(url, {responseType: 'text'}).then((response) => {
      success(response)
    }, (response) => {
      error(response)
    })
  }
}
