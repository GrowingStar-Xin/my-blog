<template>
  <div class="detail-caontainer">
    <Layout>
      <template>
        <div class="ContentDetail" ref="container">
          <ContentDetail :blog="data" v-load="isLoading" v-if="data" />
          <BlogComment />
        </div>
      </template>
      <template #right>
        <div class="BlogToc">
          <BlogToc :toc="data.toc" v-load="isLoading" v-if="data" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import mainScrollMixins from "@/mixins/mainScroll";
import Layout from "@/components/Layout";
import BlogToc from "./components/BlogToc";
import ContentDetail from "./components/ContentDetail";
import BlogComment from "./components/BlogComment";
import { getBlog } from "@/api/blog";
import { titleController } from "@/utils";
export default {
  mixins: [fetchData(null), mainScrollMixins("container")],
  components: {
    Layout,
    BlogToc,
    ContentDetail,
    BlogComment,
  },
  methods: {
    async getData() {
      const resp = await getBlog(this.$route.params.id);
      if (resp.title) {
        titleController.setWebTitle(resp.title);
      }

      return resp;
    },
  },
};
</script>

<style lang="less">
.detail-caontainer {
  width: 100%;
  height: 100%;
  padding: 20px;
  .ContentDetail {
    max-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .BlogToc {
    width: 300px;
    height: 100%;
  }
}
</style>