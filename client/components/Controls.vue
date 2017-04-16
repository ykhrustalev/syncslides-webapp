<template>
  <div class="controls-wrapper">
    <div class="controls">
      <div class="btn-group btn-group-xs">
        <label for="slideNumber">Тукущий:</label>
        <input
          id="slideNumber"
          type="text"
          v-model="slideNumber"
          class="input input-xsm "
        /> / {{totalCnt}}
      </div>
      <br>
      <div class="btn-group btn-group-xs">
        <button class="btn btn-primary" @click="prevSlide()">Предыдущий </button>
        <button class="btn btn-primary" @click="nextSlide()">Следующий</button>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      totalCnt() {
        return this.$store.state.slidesUrls.length;
      },
      slideNumber: {
        get() {return this.$store.state.slideNumber},
        set(v) {this.$store.dispatch('setSpecificSlide', v)}
      },
      slideContents() {
        return this.$store.state.slideContents
      }
    },
    methods: {
      prevSlide() {
        this.$store.dispatch('prevSlide')
      },
      nextSlide() {
        this.$store.dispatch('nextSlide')
      }
    }
  }
</script>

<style>
  .controls-wrapper {
    padding: 20px;
    float: left;
  }

  .input-xsm {
    width: 40px
  }
</style>
