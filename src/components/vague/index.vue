<template lang="pug">
  .wrapper
    img.image(:src="image")
    .main
      .cover(:style="{ backgroundImage: `url(${image})` }")
      .border
        .top
        .bottom
        .left
        .right
      .content
        p.title 欢迎参加百度前端技术学院
        a.link 点击报名
</template>

<script>
import image from "../auto-matting/lihuili.jpg";
export default {
  name: "vague",
  props: {
    image: {
      type: String,
      default: image
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  margin: 0 auto; /* 发布之后需要删除 */

  position: relative;
  display: table;
  .image {
    display: block;
  }
  .main {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    &:hover {
      .border {
        .top,
        .bottom {
          &:after,
          &:before {
            width: 50%;
          }
        }
        .left,
        .right {
          &:after,
          &:before {
            height: 50%;
          }
        }
      }

      .content {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }

    .cover {
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(10px);
      margin: -30px;
    }

    .border {
      width: 90%;
      height: 70%;
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 4px 2px;
      border-style: solid;
      border-color: transparent;
      .top,
      .bottom {
        width: 100%;
        height: 4px;
        left: 0;
        position: absolute;
      }
      .left,
      .right {
        height: 100%;
        width: 2px;
        top: 0;
        position: absolute;
      }
      .top,
      .bottom,
      .left,
      .right {
        &:after {
          content: "";
          position: absolute;
          transition: all 0.5s;
        }
        &:before {
          content: "";
          position: absolute;
          transition: all 0.5s;
        }
      }
      .top {
        top: 0;
        &:after,
        &:before {
          width: 0;
          height: 100%;
          top: 0;
          background: #fff;
        }
        &:after {
          left: 50%;
        }
        &:before {
          right: 50%;
        }
      }
      .bottom {
        bottom: 0;
        &:after,
        &:before {
          width: 0;
          height: 100%;
          bottom: 0;
          background: #fff;
        }
        &:after {
          left: 50%;
        }
        &:before {
          right: 50%;
        }
      }
      .left {
        left: 0;
        &:after,
        &:before {
          height: 0;
          width: 100%;
          left: 0;
          background: #fff;
        }
        &:after {
          top: 50%;
        }
        &:before {
          bottom: 50%;
        }
      }
      .right {
        right: 0;
        &:after,
        &:before {
          height: 0;
          width: 100%;
          left: 0;
          background: #fff;
        }
        &:after {
          top: 50%;
        }
        &:before {
          bottom: 50%;
        }
      }
    }

    .content {
      opacity: 0;
      position: absolute;
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -30%);
      transition: all 0.7s;
      transition-delay: 0.2s;
      .title {
        font-size: 20px;
        font-weight: bold;
        background-image: linear-gradient(
          to right,
          blue,
          red 25%,
          blue 50%,
          red 75%,
          blue 100%
        );
        background-size: 200% 100%;
        -webkit-background-clip: text;
        color: transparent;
        animation: streamer 5s infinite linear;
      }
      .link {
        animation: colors 3s infinite linear;
      }
    }
  }
}
@keyframes streamer {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
@keyframes colors {
  0% {
    color: #0f0;
  }
  100% {
    color: #00f;
  }
}
</style>

