<template>
  <div class="ToTop-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      const range = 500;
      // console.log(123);
      if (dom.scrollTop > range) {
        this.show = true;
        //console.log(123);
      }
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.ToTop-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 80px;
  height: 80px;
  font-size: 20px;
  border-radius: 50%;
  font-weight: bold;
  line-height: 80px;
  text-align: center;
  color: #fff;
  background: @primary;
}
</style>