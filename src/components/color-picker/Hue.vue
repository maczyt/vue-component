<template lang="pug">
  .color-bar(@mousedown="handleMouseDown" ref="container")
    .color-bar-control(ref="control")
</template>

<script>
export default {
  name: "Hue",
  props: {
    color: Object
  },
  methods: {
    handleChange(event) {
      const container = this.$refs.container;
      const control = this.$refs.control;
      const containerHeight = container.clientHeight;
      const controlHeight = control.offsetHeight;

      const yOffset = container.getBoundingClientRect().top;
      const pageY = event.pageY;
      let top = pageY - yOffset - window.pageYOffset;
      if (top < 0) {
        top = 0;
      }
      if (top >= containerHeight - controlHeight) {
        top = containerHeight - controlHeight;
      }

      const h = Math.round(top * 360 / containerHeight);
      control.style.top = top + "px";
      this.$emit("changeColor", Object.assign(this.color, { h }));
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
  }
};
</script>


<style lang="less" scoped>
.color-bar {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    to bottom,
    red 0,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    red
  );
}
.color-bar-control {
  z-index: 3;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 100%;
  padding: 2px;
  border: 1px solid rgb(255, 255, 255);
  cursor: pointer;
  box-sizing: content-box;
}
</style>

