<template>
  <div class="test-container">
    <div>dadaa</div>
    <empty />
  </div>
</template>



<script>
import empty from "./index";
export default {
  components: {
    empty,
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.test-container {
  width: 100%;
  height: 500px;
  background: #ddd;
}
.iconfont {
  font-size: 80px;
  font-weight: bold;
  color: @lightWords;
}
</style>