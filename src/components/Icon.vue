<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-4-164",
  success: "icon-Group-",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-xinxi",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-set_about_hov",
  weixin: "icon-weixin",
  mail: "icon-icon-email",
  github: "icon-github",
  qq: "icon-qq",
  arrowUp: "icon-tubiaozhizuo-",
  arrowDown: "icon-xiajiantou",
  empty: "icon-empty",
  chat: "icon-icon-test",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2474668_k20bvi4jyj8.css";
.icon-container {
  vertical-align: middle;
  color: inherit;
  font-size: inherit;
}
</style>