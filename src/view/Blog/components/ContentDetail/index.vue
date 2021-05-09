<template>
  <div class="contentdetail-container" v-if="blog">
    <div class="title">{{ blog.title }}</div>
    <div class="aside">
      <span>浏览: {{ blog.scanNumber }}</span>
      <span>时间: {{ transformDate(blog.createDate) }}</span>
      <a href="# data-form-container">评论: {{ blog.commentNumber }}</a>
      <router-link
        :to="{
          name: 'Categorylog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >分类: {{ blog.category.name }}</router-link
      >
    </div>
    <div class="des">{{ blog.description }}</div>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { transformDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/style/markdown.css";

export default {
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  methods: {
    transformDate,
  },
};
</script>

<style lang="less" scoped>
.contentdetail-container {
  .title {
    width: 100%;
    font-size: 35px;
    font-weight: bold;
  }
  .aside {
    display: flex;
    margin: 10px 0;
    width: 100%;
    span {
      display: inline-block;
      margin-right: 20px;
    }
    a {
      margin-right: 10px;
    }
  }
  .des {
    font-size: 18px;
    text-indent: 2em;
    letter-spacing: 2px;
    margin: 10px 0;
  }
}
</style>