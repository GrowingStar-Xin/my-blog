<template>
  <div class="container">
    <MessageArea
      v-if="data"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { postComment, getComments } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  computed: {
    hasmove() {
      //console.log(this.data.rows.length < this.data.total);
      return this.data.rows.length < this.data.total;
    },
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async handleScroll(dom) {
      if (this.isLoading) {
        return;
      }
      //console.log(dom);
      const range = 100; //定义一个范围，如果 在这个范围内的 话 算是到了底部
      if (
        Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight) <= range
      ) {
        this.fetchMore();
      }
    },
    async getData() {
      const res = await getComments(
        this.$route.params.id,
        this.page,
        this.limit
      );
      return res;
    },
    async fetchMore() {
      if (!this.hasmove) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await getComments(
        this.$route.params.id,
        this.page,
        this.limit
      );
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      // console.log(123, this.data.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const res = await postComment({
        ...formData,
        blogid: this.$route.id,
      });
      this.data.rows.unshift(res);
      this.data.total += 1;
      callback("评论成功");
    },
  },
};
</script>

<style>
</style>