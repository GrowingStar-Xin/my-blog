<template>
  <div
    class="CarouselItem-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carouse-img" :style="imagePosition" ref="ImageLoader">
      <ImageLoader
        :src="item.bigImg"
        :placeholder="item.midImg"
        @load="handleLoad"
      />
    </div>
    <div class="title" ref="title">
      {{ item.title }}
    </div>
    <div class="des" ref="des">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      title: null,
      des: null,
      titleWidth: 0,
      desWidth: 0,
      containerSize: null, //外层容器的尺寸
      innerSize: null, //加载器尺寸
      mouseX: 0, //相对于视口的位置
      mouseY: 0,
    };
  },
  components: {
    ImageLoader,
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      const left = -(extraWidth / this.containerSize.width) * this.mouseX;
      const top = -(extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    handleLoad() {
      this.title.style.opacity = 1;
      this.title.style.width = 0;
      this.$refs.title.clientWidth; //reflow
      this.title.style.width = this.titleWidth + "px";
      this.title.style.transition = "1s";

      this.des.style.opacity = 1;
      this.des.style.width = 0;
      this.$refs.des.clientWidth; //reflow
      this.des.style.width = this.desWidth + "px";
      this.des.style.transition = "2s 1s";
    },
    setSize() {
      this.containerSize = {
        height: this.$refs.container.clientHeight,
        width: this.$refs.container.clientWidth,
      };

      this.innerSize = {
        height: this.$refs.ImageLoader.clientHeight,
        width: this.$refs.ImageLoader.clientWidth,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect(); //获取元素所在的信息
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },

  mounted() {
    this.title = this.$refs.title;
    this.des = this.$refs.des;
    this.titleWidth = this.title.clientWidth;
    this.desWidth = this.des.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.CarouselItem-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .carouse-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s;
  }
  .title,
  .des {
    position: absolute;
    left: 40px;
    top: 50%;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    color: darken(@gray, 10%);
    letter-spacing: 5px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  .title {
    font-size: 30px;
    font-weight: 530;
    transform: translateY(30px);
  }
  .des {
    margin-top: 10px;
    font-size: 16px;
    transform: translateY(70px);
    text-indent: 1em;
  }
}
</style>