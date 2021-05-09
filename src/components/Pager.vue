<template>
  <div class="pager-container">
    <a @click="handleClick(1)" :class="{ disable: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)">&lt;&lt;</a>
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n == current }"
      @click="handleClick(n)"
    >
      {{ n }}</a
    >
    <a @click="handleClick(current + 1)">&gt;&gt;</a>
    <a @click="handleClick(totalPage)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页数
    totalPage() {
      return Math.ceil(this.total / this.limit);
    },
    //显示的最小数字
    visibleMin() {
      let min = this.current - Math.ceil(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.totalPage) {
        max = this.totalPage;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i < this.visibleMax; i++) {
        nums.push(i);
      }

      return nums;
    },
  },

  methods: {
    handleClick(newpage) {
      if (newpage < 1) {
        newpage = 1;
      }
      if (newpage > this.totalPage) {
        newpage = this.totalPage;
      }
      if (newpage == this.current) {
        return;
      }
      //抛出一个事件;
      this.$emit("pageChange", newpage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
a {
  color: @primary;
  margin: 0 10px;
  cursor: pointer;
  &.active {
    color: @words;
    font-weight: bold;
  }
}
.disabled {
  color: @lightWords;
  cursor: not-allowed;
}
</style>
