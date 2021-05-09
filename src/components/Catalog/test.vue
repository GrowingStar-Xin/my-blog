<template>
  <div class="blog">
    <Catalog :list="list" />
  </div>
</template>

<script>
import Catalog from "./components/Catalog";
export default {
  components: {
    Catalog,
  },
  data() {
    return {
      list: [
        {
          title: "a",
          isSelected: false,
        },
        {
          title: "b",
          isSelected: false,
          children: [
            {
              title: "b-1",
              isSelected: false,
            },
            {
              title: "b-2",
              isSelected: false,
              children: [
                {
                  title: "b-2-1",
                  isSelected: false,
                },
                {
                  title: "b-2-2",
                  isSelected: false,
                },
                {
                  title: "b-2-3",
                  isSelected: false,
                },
                {
                  title: "b-2-3",
                  isSelected: false,
                },
              ],
            },
          ],
        },
        {
          title: "c",
          isSelected: true,
        },
        {
          title: "d",
          isSelected: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>