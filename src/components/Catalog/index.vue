<template>
  <div class="Catalog-container">
    <ul>
      <li class="title" v-for="item in list" :key="item.id">
        <div
          :class="{
            selected: item.isSelected,
          }"
        >
          <span @click="handleClick(item)">{{ item.name }}</span>
          <span @click="handleClick(item)" class="extra" v-if="item.extra">
            {{ item.extra }}
          </span>
        </div>

        <Catalog :list="item.children" @select="handleClick" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.Catalog-container {
  .title {
    cursor: pointer;
    letter-spacing: 3px;
    font-size: 20px;
    min-height: 40px;
    line-height: 40px;
    margin-left: 20px;
    .selected {
      color: @warn;
      font-weight: bold;
    }
  }
  .extra {
    margin-left: 20px;
  }
}
</style>