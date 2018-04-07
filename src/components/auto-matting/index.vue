<template lang="pug">
  .auto-matting(
    ref="container"
  )
</template>

<script>
import { Canvas } from "./canvas";
import lihuili from "./lihuili.jpg";
export default {
  name: "AutoMatting",
  mounted() {
    const image = new Image();
    const container = this.$refs.container;
    image.addEventListener("load", () => {
      const canvas = new Canvas(image);
      this.canvas = canvas;
      container.appendChild(canvas.canvas);
    });
    image.src = lihuili;
  }
};
</script>

<style lang="less" scoped>

</style>

