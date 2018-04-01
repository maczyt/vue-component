<template lang="pug">
  .color-alpha(
    @mousedown.stop="handleMouseDown"
    ref="container"
  )
    .bg
    .color(:style="{background: colorBg}")
    .control(ref="control")
</template>

<script>
export default {
  name: "Alpha",
  props: {
    color: {
      type: Object,
      required: true
    }
  },
  computed: {
    colorBg() {
      const { h, s, l } = this.color;
      return `linear-gradient(to bottom, hsl(${h}, ${s}%, ${l}%), transparent)`;
    }
  },
  methods: {
    handleChange(event) {
      const container = this.$refs.container;
      const control = this.$refs.control;
      const containerHeight = container.clientHeight;
      const controlHeight = control.offsetHeight;
      let top =
        event.pageY -
        container.getBoundingClientRect().top -
        window.pageYOffset;
      if (top < 0) {
        top = 0;
      }
      if (top >= containerHeight - controlHeight) {
        top = containerHeight - controlHeight;
      }
      control.style.top = top + "px";
      const { h, s, l } = this.color;
      const alpha = +(1 - top / containerHeight).toFixed(2);
      this.$emit("changeColor", Object.assign(this.color, { a: alpha }));
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
.bg {
  background: url("./bg.png");
}
.color-alpha {
  width: 100%;
  height: 100%;
  position: relative;
}
.bg,
.color {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.color {
  z-index: 2;
  background: red;
}

.control {
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

