<template>
  <div class="blog-category-container" v-load="isLoading">
    <h2>文章分类</h2>
    <Catalog :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import Catalog from "@/components/Catalog";
import { getBlogType } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  components: {
    Catalog,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const total = this.data.reduce((a, b) => {
        return a + b.articleCount;
      }, 0);
      const res = [
        {
          id: "-1",
          name: "全部",
          articleCount: total,
        },
        ...this.data,
      ];
      return res.map((v) => ({
        ...v,
        isSelected: this.categoryId == v.id,
        extra: `${v.articleCount}篇`,
      }));
    },
  },

  methods: {
    async getData() {
      return await getBlogType();
    },
    handleSelect(item) {
      //console.log(item);
      const query = {
        limit: this.limit,
        page: this.$route.query.page || 1,
      };
      if (item.id == -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "Categorylog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 100%;
  height: 94%;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
</style>