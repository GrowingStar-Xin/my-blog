<template>
  <div class="Menu-container">
    <router-link
      v-for="item in items"
      :key="item.name"
      class="item"
      :to="{
        name: item.name,
      }"
      :exact="item.exact"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
//import Icon from "../../Icon";
export default {
  components: {
    Icon,
  },
  methods: {
    isSelected(item) {
      const link = item.link.toLowerCase();
      const curPath = location.pathname.toLowerCase();
      if (item.startWith) {
        return curPath.startsWith(link);
      } else {
        return curPath === link;
      }
    },
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
@import "~@/style/global.less";
@import "~@/style/mixin.less";
.Menu-container {
  width: 100%;
  .item {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    color: @gray;
    &.selected {
      background: darken(@words, 3%);
    }

    p {
      display: block;
      font-size: 22px;
    }
    .icon {
      font-size: 22px;
      vertical-align: middle;
      padding: 10px 15px;
      margin-left: 10px;
      height: 30px;
    }
  }
}
</style>