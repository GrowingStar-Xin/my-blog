<template>
  <div class="ImageLoader-container">
    <img v-if="!isLoadingDown" :src="placeholder" class="mask" />
    <img
      :src="src"
      alt="这是一张图片"
      @load="handleLoad"
      :style="{
        opacity: OriginOpacity,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    OriginOpacity() {
      return this.imgOpacity ? 1 : 0;
    },
  },
  data() {
    return {
      imgOpacity: false,
      isLoadingDown: false, //是否加载已经完成
    };
  },
  methods: {
    handleLoad() {
      this.imgOpacity = true;
      setTimeout(() => {
        this.isLoadingDown = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.ImageLoader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fit ();
    object-fit: cover;
    &.mask {
      filter: blur(30px);
    }
  }
}
</style>