<template lang="pug">
  .color-picker-container
    .color-info(:style="{'background': selected ? selectedColor : currentColor}") {{ selected ? selectedColor : currentColor }}
    section
      .color-main-wrap
        Main(:color="hsl" @changeColor="changeColor")
      .color-alpha-wrap
        Alpha(@changeColor="changeColor" :color="hsl")
      .color-bar-wrap
        Hue(@changeColor="changeColor" :color="hsl")
</template>

<script>
import Hue from "./Hue";
import Alpha from "./Alpha";
import Main from "./Main";
import { hslToRgb } from "./utils";
export default {
  components: {
    Hue,
    Alpha,
    Main
  },
  data() {
    return {
      selected: false,
      h: 0, // 色相
      s: 100, // 饱和度
      l: 50, // 亮度
      a: 1, // 透明度
      selectedColor: ""
    };
  },
  methods: {
    changeColor({ h, s, l, a }, selected) {
      this.selected = selected ? true : false;
      if (selected) {
        const { R, G, B } = hslToRgb(h, s, l);
        if (a === 1) {
          this.selectedColor = `rgb(${R}, ${G}, ${B})`;
        } else {
          this.selectedColor = `rgba(${R}, ${G}, ${B}, ${a})`;
        }
        return;
      }
      this.h = h;
      this.s = s;
      this.l = l;
      this.a = a;
    }
  },

  computed: {
    hsl() {
      const { h, s, l, a } = this;
      return {
        h,
        s,
        l,
        a
      };
    },
    currentColor() {
      const { h, s, l, a } = this;
      const { R, G, B } = hslToRgb(h, s, l);
      if (a === 1) {
        return `rgb(${R}, ${G}, ${B})`;
      }
      return `rgba(${R}, ${G}, ${B}, ${a})`;
    }
  }
};
</script>

<style lang="less" scoped>
div,
section {
  box-sizing: border-box;
}
.color-picker-container {
  // border: 1px solid #454547;
  background-color: #2e2d32;
  width: 400px;
  height: 300px;
  margin: auto;
  .color-info {
    width: 100%;
    height: 30px;
    color: #fff;
    line-height: 30px;
  }
  section {
    padding: 5px;
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    .color-main-wrap {
      width: 70%;
      height: 100%;
      padding: 5px;
    }
    .color-alpha-wrap,
    .color-bar-wrap {
      width: 15%;
      height: 100%;
      padding: 5px;
    }
  }
}
</style>
