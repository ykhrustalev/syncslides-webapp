<template>
  <div class="slider-wrapper">
    <div class="slider">
      <div v-html="slideContents"></div>
    </div>
  </div>
</template>

<script>
  // TODO: check mappers
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    slideNumber() {
      return this.$store.state.slideNumber
    },
    slideContents() {
      return this.$store.state.slideContents
    }
  }
}
</script>

<style>
.slider {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
