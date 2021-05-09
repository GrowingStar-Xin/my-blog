<template>
  <div class="about-container" v-load="srcLoading">
    <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="srcLoading = false"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //网页加载事件
      srcLoading: true,
    };
  },
  computed: mapState("about", {
    src: "data",
    isLoading: "isLoading",
  }),
  created() {
    this.$store.dispatch("about/getData");
  },
};
</script >

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  // width: 400px;
  // height: 400px;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
  // background: green;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>