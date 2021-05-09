<template>
  <div class="Layout-container">
    <header class="left">
      <slot name="left"></slot>
    </header>
    <div class="main">
      <slot></slot>
    </div>
    <footer class="right">
      <slot name="right"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  .left,
  .right {
    flex: 0 0 auto;
  }
  .main {
    flex: 1 1 auto;
  }
}
</style>