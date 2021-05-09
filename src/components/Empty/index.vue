<template>
  <div class="empty-container">
    <i class="iconfont icon-empty"></i>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "无数据",
    };
  },
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2474668_k20bvi4jyj8.css";
@import "~@/style/var.less";
.empty-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
p {
  font-size: 30px;
  color: @lightWords;
}
</style>