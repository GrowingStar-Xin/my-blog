<template>
  <div class="container">
    <Loading />
  </div>
</template>

<script>
import Loading from "./";
export default {
  components: {
    Loading,
  },
};
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  background: green;
}
</style>