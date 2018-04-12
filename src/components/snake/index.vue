<template lang="pug">
  .snake
    canvas(
      ref="container"
      width="600"
      height="600"
    ) Sorry, you need a browser that supports the HTML canvas element.
</template>

<script>
export default {
  name: "Snake",
  mounted() {
    
  }
};
</script>

<style lang="less" scoped>
.snake {
  border: 1px solid orange;
  display: inline-block;
  margin: 0 auto;
}
</style>

