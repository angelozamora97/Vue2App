import AuthRouter from "@/modules/auth/router";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "@/shared/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: 'auth',
    ...AuthRouter,
  }
  
];

const router = new VueRouter({
  routes,
});

router.afterEach((to,from) => {
  console.log('************** ROUTER TO **************');
  console.log(to);
})

export default router;
