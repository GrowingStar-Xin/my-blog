<template>
  <div class="BlogList-container">
    <ul ref="container">
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.thumb" :title="item.tumb" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="intro">
            <span>日期：{{ transformDate(item.createDate) }}</span>
            <span>浏览：{{ item.sanNumber }}</span>
            <span>评论:{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'Categorylog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      v-show="data.total > 1"
      :total="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import mainScrollMixins from "@/mixins/mainScroll";
import { transformDate } from "@/utils";
import Pager from "@/components/Pager";
export default {
  mixins: [fetchData({}), mainScrollMixins("container")],
  data() {
    return {};
  },
  computed: {
    routeInfo() {
      //console.log(this.$route);
      const page = +this.$route.query.page || 1;
      //console.log(page);
      const limit = +this.$route.query.limit || 10;
      const categoryId = +this.$route.params.categoryId || -1;
      return {
        page,
        limit,
        categoryId,
      };
    },
  },
  components: {
    Pager,
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.getData();
      this.isLoading = false;
    },
  },
  methods: {
    transformDate,
    async getData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newpage) {
      //console.log(index);
      const query = {
        page: newpage,
        limit: this.routeInfo.limit,
      };
      //处理分页，改变路由
      if (this.routeInfo.categoryId === -1) {
        //http://localhost:8080/blog?
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        //http://localhost:8080/blog/cate/1?
        this.$router.push({
          name: "Categorylog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.BlogList-container {
  width: 100%;
  height: 100%;
  ul {
    list-style: none;
    overflow-y: scroll;
    max-height: 94%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
        img {
          display: block;
          max-width: 200px;
          border-radius: 5px;
        }
      }
      .main {
        flex: 1 1 auto;
        height: 100%;
        margin-left: 10px;
        h2 {
          margin: 0;
        }
        .intro {
          font-size: 12px;
          width: 100%;
          color: @gray;
          span {
            margin-right: 15px;
          }
          a {
            color: @gray;
          }
        }
        .desc {
          margin: 15px 0;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
