import Vue from 'vue'

const _slides = [
  'http://localhost:8081/presentation1/1.html',
  'http://localhost:8081/presentation1/2.html'
];

export default {
  getSlidesList(presentationId, success, error) {
    success(_slides)
  },

  getSlideContents (url, success, error) {
    Vue.http.get(url, {responseType: 'text'}).then((response) => {
      console.log(response.body)
      console.log(response.bodyText)

      success(response)
    }, (response) => {
      console.log(response)
      error(response)
    })
  }
}
