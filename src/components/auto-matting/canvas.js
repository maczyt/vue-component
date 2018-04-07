import { getVector, getHorn } from "./utils";

export class Canvas {
  constructor(image, jingdu = 20) {
    const canvas = document.createElement("canvas");
    this.context = canvas.getContext("2d");
    this.width = canvas.width = image.width;
    this.height = canvas.height = image.height;
    this.canvas = canvas;
    this.jingdu = jingdu; // 精度
    canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    this.context.drawImage(image, 0, 0, this.width, this.height);
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  destroy() {
    this.canvas.parentNode.removeChild(this.canvas);
  }

  getImageData() {
    return this.context.getImageData(0, 0, this.width, this.height);
  }

  _getImageData(x, y, width = 1, height = 1) {
    return this.context.getImageData(x, y, width, height);
  }

  getColor(x, y) {
    const imageData = this._getImageData(x, y);
    const data = imageData.data;
    const r = data[0];
    const g = data[1];
    const b = data[2];
    const a = data[3];
    return [r, g, b, Math.round(a / 255)];
  }

  handleMouseDown(event) {
    const x = event.pageX - this.canvas.offsetLeft;
    const y = event.pageY - this.canvas.offsetTop;
    const color = this.getColor(x, y);
    const p = getVector(color[0], color[1], color[2]);
    this.matting(p);
  }

  mattingRect(x, y) {
    this.context.fillRect(x, y, 10, 10);
  }

  matting(p1) {
    let i = 1,
      j = 1,
      p2,
      color = [];
    this.context.save();
    this.context.fillStyle = "#fff";
    for (; i < this.width; i += 10) {
      for (j = 1; j < this.height; j += 10) {
        color = this.getColor(i, j);
        p2 = getVector(color[0], color[1], color[2]);
        if (getHorn(p1, p2) <= this.jingdu) {
          this.mattingRect(i, j);
        }
      }
    }
    this.context.restore();
  }
}
