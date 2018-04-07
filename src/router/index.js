import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ColorPicker from "@/components/color-picker";
import TagCloud from "@/components/tag-cloud";
import AutoMatting from "@/components/auto-matting";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/color-picker",
      name: "ColorPicker",
      component: ColorPicker
    },
    {
      path: "/tag-cloud",
      name: "TagCloud",
      component: TagCloud
    },
    {
      path: "/auto-matting",
      name: "AutoMatting",
      component: AutoMatting
    }
  ]
});
