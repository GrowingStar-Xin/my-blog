<template>
  <div class="Blog-container">
    <Layout>
      <template>
        <div class="BlogList">
          <BlogList />
        </div>
      </template>
      <template #right>
        <div class="Category">
          <BlogCategory />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.Blog-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .BlogList {
    width: 100%;
    height: 100%;
  }
  .Category {
    width: 300px;
    height: 100%;
  }
}
</style>