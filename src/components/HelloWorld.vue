<template>
  <div class="hello">
    <router-link to="/color-picker">颜色选择器</router-link>
    <router-link to="/tag-cloud">3D标签云</router-link>
    <router-link to="/auto-matting">自动抠图</router-link>
    <router-link to="/snake">贪吃蛇</router-link>

    <router-link to="/vague">有趣的鼠标悬浮模糊效果</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
