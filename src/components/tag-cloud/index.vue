<template lang="pug">
  .tag-cloud(ref="container" @mousemove.stop="handleMouseMove")
    a(
      v-for="n in 50" 
      :key="n" 
      class="item"
      :href="links[0].url"
    ) {{ links[0].title }}
</template>

<script>
import { fallLength, radius } from "./config";
import Tag from "./tag";
let angleX = Math.PI / 500;
let angleY = Math.PI / 500;
const tags = [];

export default {
  data() {
    return {
      CX: 0,
      CY: 0,
      EX: 0,
      EY: 0,
      timer: null,
      links: [
        {
          url: "#",
          title: "大华"
        }
      ]
    };
  },
  methods: {
    rotate(link) {
      const container = this.$refs.container;
      const EX = container.getBoundingClientRect().left + window.pageXOffset;
      const EY = container.getBoundingClientRect().top + window.pageYOffset;
    },
    getCoordinate(index, len) {
      const a = Math.acos((2 * index - 1) / len - 1); // θ: 方位角
      const b = a * Math.sqrt(len * Math.PI); // φ: 天顶角
      const x = radius * Math.sin(a) * Math.cos(b);
      const y = radius * Math.sin(a) * Math.sin(b);
      const z = radius * Math.cos(a);
      return {
        x,
        y,
        z
      };
    },
    render(link, index, len) {
      const { x, y, z } = this.getCoordinate(index, len);
      const tag = new Tag(link, x, y, z, this.CX, this.CY);
      tags.push(tag);
      tag.move();
    },
    animate() {
      this.rotateX();
      this.rotateY();
      tags.forEach(tag => {
        tag.move();
      });
      requestAnimationFrame(this.animate);
    },
    rotateX() {
      const cos = Math.cos(angleX);
      const sin = Math.sin(angleX);
      tags.forEach(tag => {
        const y = tag.y * cos - tag.z * sin;
        const z = tag.z * cos + tag.y * sin;
        tag.y = y;
        tag.z = z;
      });
    },
    rotateY() {
      const cos = Math.cos(angleY);
      const sin = Math.sin(angleY);
      tags.forEach(tag => {
        const x = tag.x * cos - tag.z * sin;
        const z = tag.z * cos + tag.x * sin;
        tag.x = x;
        tag.z = z;
      });
    },
    init() {
      const container = this.$refs.container;
      this.CX = container.offsetWidth / 2;
      this.CY = container.offsetHeight / 2;
      this.EX = container.getBoundingClientRect().left + window.pageXOffset;
      this.EY = container.getBoundingClientRect().top + window.pageYOffset;
      const links = container.querySelectorAll("a");
      const len = links.length;
      [].forEach.call(links, (link, index) =>
        this.render(link, index + 1, len)
      );
      this.animate();
    },
    handleMouseMove(event) {
      const x = event.clientX - this.EX - this.CX;
      const y = event.clientY - this.EY - this.CY;
      angleX = y * 0.0001;
      angleY = x * 0.0001;
    }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    tags.length = 0;
  }
};
</script>


<style lang="less" scoped>
.tag-cloud {
  position: relative;
  margin: 20px auto;
  width: 500px;
  height: 500px;
  .item {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    text-decoration: none;
    font-weight: bold;
    will-change: transform;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

