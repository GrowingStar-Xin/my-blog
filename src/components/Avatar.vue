<template>
  <img
    :class="vImg ? 'v-img' : ''"
    :src="url"
    alt=""
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
      require: true,
    },
    size: {
      type: Number,
    },
    vImg: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/*带有作用域是样式  */
.v-img {
  margin: 10px;
  border-radius: 50%;
  object-fit: cover;
}
</style>