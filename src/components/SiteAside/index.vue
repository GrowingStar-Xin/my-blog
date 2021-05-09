<template>
  <div class="SiteAside-container" v-if="data">
    <div class="header">
      <Avatar :url="data.avatar" :size="130" :vImg="true" />
      <p>{{ data.siteTitle }}</p>
    </div>
    <div class="middle">
      <Menu />
    </div>
    <div class="footer">
      <Contact />
    </div>
    <p class="publish">{{ data.icp }}</p>
  </div>
</template>

<script>
import Contact from "./Contact";
import Menu from "./Menu";
import Avatar from "../Avatar";
import { mapState } from "vuex";
export default {
  components: {
    Contact,
    Menu,
    Avatar,
  },
  data() {
    return {
      info: "info",
      current: 11,
    };
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
@import "~@/style/mixin.less";
.SiteAside-container {
  position: relative;
  width: 100%;
  min-height: 500px;
  height: 100%;
  background: @dark;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .header {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: @gray;
  }
  .footer {
    width: 100%;
  }
  .publish {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: @words;
    font-size: 15px;
  }
}
</style>