<template>
  <div class="slider-wrapper">
    <div class="slider">
      {{pageNumber}}
    </div>
    <button @click="$store.commit('PREV_PAGE')">Previous Page</button>
    <button @click="$store.commit('NEXT_PAGE')">Next Page</button>
    <div>
      {{slide}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pageNumber() {
      return this.$store.state.pageNumber
    },
    slide() {
      return this.$store.state.slides[this.pageNumber]
    }
  },
  methods: {
    getContents(url) {
      $.ajax({
        type:     "GET",
        url:      "https://http://freetexthost.com/r56ct5aw03", // <-- Here
        dataType: "jsonp",
        success: function(data){
          console.log(data);
        }
      });
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
