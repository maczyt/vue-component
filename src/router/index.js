import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ColorPicker from "@/components/color-picker";
import TagColor from "@/components/tag-cloud";

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
      component: TagColor
    }
  ]
});
