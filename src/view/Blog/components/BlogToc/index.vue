<template>
  <div class="BlogToc-container" v-if="toc">
    <Catalog :list="tocWithSelected" @select="handleSelect" />
  </div>
</template>

<script>
// 难点
import Catalog from "@/components/Catalog";
import { debounce } from "@/utils";
export default {
  props: {
    toc: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    Catalog,
  },
  computed: {
    tocWithSelected() {
      const newToc = (toc = []) => {
        return toc.map((v) => ({
          ...v,
          isSelected: v.anchor === this.activeAnchor,
          children: newToc(v.children),
        }));
      };
      return newToc(this.toc);
    },
    //获取dom对象
    doms() {
      const doms = [];
      const addToDoms = (toc = []) => {
        return toc.map((v) => {
          const dom = document.getElementById(v.anchor);
          //console.log(dom);
          doms.push(dom);
          if (v.children && v.children.length) {
            addToDoms(v.children);
          }
        });
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 500);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    handleSelect(item) {
      //console.log(e);
      location.hash = item.anchor;
    },
    setSelect() {
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        //查看dom元素是否该被选中
        if (!dom) {
          continue;
        }
        //元素到
        const top = dom.getBoundingClientRect().top;
        //console.log("top", top);
        if (top >= 0 && top <= range) {
          //内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
          //下方
        } else {
          //上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style>
</style>