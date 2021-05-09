<template>
  <div class="test-container">
    <Contact class="Contact-container" />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
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