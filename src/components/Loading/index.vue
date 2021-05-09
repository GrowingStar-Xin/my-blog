<template>
  <div class="Loading-container">
    <img :src="loading" alt="" />
  </div>
</template>

<script>
import loading from "@/assets/loading.svg";
export default {
  data() {
    return {
      loading,
    };
  },
};
</script>

<style lang="less">
@import "~@/style/mixin.less";
.Loading-container {
  .self-center();
  img {
    width: 80px;
    height: 80px;
  }
}
</style>