<template>
  <div class="home-container" ref="container" v-load="isLoading" v-if="data">
    <ul class="Carousel" ref="Carousel">
      <li v-for="item in data" :key="item.id" class="CarouselItem">
        <CarouselItem :item="item" />
      </li>
    </ul>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        class="spot"
        :class="{
          active: i == index,
        }"
        @click="switchTo(i)"
      ></li>
    </ul>
    <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index > 0">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    ...mapState("banner", ["isLoading", "data"]),
  },
  created() {
    //调用仓库数据
    this.$store.dispatch("banner/fetchData");
  },
  methods: {
    //介绍页跳转函数
    switchTo(i) {
      this.index = i;
      const item = this.$refs.Carousel;
      const height = this.$refs.container.clientHeight;
      item.style.transform = `translateY(-${this.index * height}px)`;
    },
  },
};
</script>

<style lang='less'>
@import "~@/style/var.less";
@import "~@/style/mixin.less";
@range: 5px;
@keyframes up-jump {
  0% {
    transform: translateY(@range);
  }
  50% {
    transform: translateY(-@range);
  }
  100% {
    transform: translateY(@range);
  }
}
@keyframes down-jump {
  0% {
    transform: translateY(-@range);
  }
  50% {
    transform: translateY(@range);
  }
  100% {
    transform: translateY(-@range);
  }
}
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  .icon {
    cursor: pointer;
    position: absolute;
    width: 50px;
    left: calc(50% - 25px);
    font-size: 25px;
    color: #fff;
    &-up {
      top: 25px;
      animation: up-jump 2s infinite;
    }
    &-down {
      bottom: 25px;
      animation: down-jump 2s infinite;
    }
  }
  .indicator {
    position: absolute;
    height: 100px;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    padding: 10px 5px;
    .spot {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: @dark;
      margin-bottom: 10px;
      border: 1px solid #fff;
      &.active {
        background: #fff;
      }
    }
  }
  .Carousel {
    position: relative;
    width: 100%;
    height: 100%;

    .CarouselItem {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
}
</style>