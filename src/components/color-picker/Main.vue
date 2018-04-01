<template lang="pug">
  .color-main(
    :style="{background: currentColor}"
    @mousedown="handleMouseDown"
    ref="container"
    )
    .control(ref="control")
    .white
    .black
</template>


<script>
import { hsbToHsl } from "./utils";
export default {
  name: "Main",
  props: {
    color: Object
  },
  methods: {
    handleChange(event) {
      const container = this.$refs.container;
      const control = this.$refs.control;
      const containerHeight = container.clientHeight;
      const containerWidth = container.clientWidth;

      const pageX = event.pageX;
      const pageY = event.pageY;
      const xOffset = container.getBoundingClientRect().left;
      const yOffset = container.getBoundingClientRect().top;
      const controlWidth = control.offsetWidth;
      const controlHeight = control.offsetHeight;

      let left = pageX - xOffset - window.pageXOffset;
      let top = pageY - yOffset - window.pageYOffset;

      if (left < 0) {
        left = controlWidth / 2;
      }
      if (left >= containerWidth) {
        left = containerWidth - controlWidth / 2;
      }
      if (top < 0) {
        top = controlHeight / 2;
      }
      if (top >= containerHeight) {
        top = containerHeight - controlHeight / 2;
      }

      const h = this.color.h;
      const s = Math.round(left * 100 / containerWidth);
      const b = 100 - Math.round(top * 100 / containerHeight);
      control.style.left = left - controlWidth / 2 + "px";
      control.style.top = top - controlHeight / 2 + "px";
      this.$emit(
        "changeColor",
        Object.assign(this.color, hsbToHsl(h, s, b)),
        true
      );
    },
    handleMouseDown(event) {
      this.handleChange(event);
      window.addEventListener("mousemove", this.handleChange);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp() {
      this.unbindEvent();
    },
    unbindEvent() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    }
  },
  computed: {
    currentColor() {
      const { h, s, l } = this.color;
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
  }
};
</script>

<style lang="less" scoped>
.color-main {
  width: 100%;
  height: 100%;
  position: relative;
  .black,
  .white {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .black {
    z-index: 1;
    background: linear-gradient(to top, rgb(0, 0, 0), transparent);
  }
  .white {
    background: linear-gradient(to right, rgb(255, 255, 255), transparent);
  }
  .control {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    left: 50px;
    top: 3px;
    z-index: 10;
  }
}
</style>

