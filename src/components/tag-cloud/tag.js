import { fallLength, radius } from "./config";

export default class Tag {
  constructor(ele, x, y, z, CX, CY) {
    this.ele = ele;
    this.x = x;
    this.y = y;
    this.z = z;
    this.CX = CX;
    this.CY = CY;
    const hue = Math.floor(Math.random() * 360);
    this.ele.style.color = `hsl(${hue}, 100%, 50%)`;
  }

  move() {
    const scale = fallLength / (fallLength - this.z);
    const alpha = (this.z + radius) / (2 * radius);
    const left = this.x + this.CX - this.ele.offsetWidth / 2 + "px";
    const top = this.y + this.CY - this.ele.offsetHeight / 2 + "px";
    const transform = `translate(${left}, ${top}) scale(${scale})`;

    this.ele.style.opacity = alpha + 0.5;
    this.ele.style.zIndex = ~~(scale * 100);
    this.ele.style.transform = transform;
  }
}
