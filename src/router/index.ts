import AuthRouter from "@/modules/auth/router";
import PokemonRouter from "@/modules/pokemon/router";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "@/shared/views/Home.vue";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title : 'Home', //Para diferenciar el titulo del documento dependiendo de la vista donde este, se usa en el router
      layout: 'simple-layout' //Para obtener el componente padre base dependiendo de la vista
    }
  },
  {
    path: '/auth',
    ...AuthRouter,
  },
  {
    path: '/pokemon',
    ...PokemonRouter
  }
  
];

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  /* scrollBehavior() {
    return { x: 0, y: 0 }
  }, */
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return { x: 0, y: 0 };
  },
  routes,
});

router.afterEach((to,from) => {
  // Despues de cada cambio de ruta, se cambia el title de la web con el configurado en el meta de la ruta
  document.title = to.meta?.title || "VueApp"
})

export default router;
