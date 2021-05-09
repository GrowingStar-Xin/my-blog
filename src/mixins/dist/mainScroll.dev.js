"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(refValue) {
  return {
    mounted: function mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy: function beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
    },
    methods: {
      handleSetMainScroll: function handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
      handleMainScroll: function handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      }
    }
  };
}