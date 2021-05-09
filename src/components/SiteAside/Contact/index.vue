<template>
  <!-- :href="item[href] ? item[href] : ''" -->
  <div class="Contact-container" v-if="data">
    <ul>
      <li v-for="(item, i) in data.contact" :key="i" class="item">
        <a class="contact-item" :href="item.href">
          <Icon :type="item.type" />
          <p>{{ item.name }}</p>
        </a>
        <div v-if="item.src" class="pop">
          <img :src="item.src" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less">
@import "~@/style/global.less";
@import "~@/style/mixin.less";
@import "~@/style/global.less";
.Contact-container {
  width: 100%;
  .item {
    position: relative;
    width: 100%;
    height: 40px;
    padding-left: 10pxvv;
    display: flex;
    align-items: center;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    .contact-item {
      display: flex;
      width: 100%;
      align-items: center;
      color: @gray;
      &:hover {
        color: @primary;
      }
    }
    .pop {
      position: absolute;
      bottom: 40px;
      left: 35px;
      width: 140px;
      height: 140px;
      background: #fff;
      border-radius: 5px;
      transform-origin: bottom center;
      transform: scaleY(0);
      transition: 0.5s;
      img {
        width: 120px;
        height: 120px;
        .self-center();
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        background: #fff;
      }
    }
  }
}

.Contact-container .iconfont {
  font-size: 20px;
  padding: 10px;
}
</style>