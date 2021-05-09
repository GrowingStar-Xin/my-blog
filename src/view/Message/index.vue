<template>
  <div class="message-container" ref="container">
    <MessageArea
      v-if="data"
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import mainScrollMixins from "@/mixins/mainScroll";
import MessageArea from "@/components/MessageArea";
import { mapState } from "vuex";
export default {
  mixins: [mainScrollMixins("container")],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  computed: {
    ...mapState("message", ["isLoading", "data"]),
  },
  created() {
    this.$store.dispatch("message/getMessage", {
      page: this.page,
      limit: this.limit,
    });
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async handleSubmit(data, callback) {
      await this.$store.dispatch("message/postMessage", data);
      callback("感谢您的留言");
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 目前正在加载更多
        return;
      }
      const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
    // 加载下一页
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多啦
        return;
      }
      this.page++;
      this.$store.dispatch("message/postMessage", {
        page: this.page,
        limit: this.limit,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.MessageArea-container {
  width: 800px;
  margin: 0 auto;
}
</style>