import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import ColorPicker from "@/components/color-picker";

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
    }
  ]
});
