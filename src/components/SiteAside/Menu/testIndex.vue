<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.test-container {
  width: 250px;
  height: 600px;
  background: @dark;
  display: flex;
  align-items: center;
}
</style>