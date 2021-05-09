<template>
  <div class="MessageArea-container" v-load="isListLoading">
    <CommentArea v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <CommentList :list="list" />
  </div>
</template>

<script>
import CommentArea from "./CommentArea";
import CommentList from "./CommentList";

export default {
  components: {
    CommentArea,
    CommentList,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less">
</style>