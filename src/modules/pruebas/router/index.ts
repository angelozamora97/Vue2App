export default {
  component: 
    () => import(/* webpackChunkName: "pruebas-layout" */ "@/modules/pruebas/layouts/PruebasLayout.vue"),
  children: [
    {
      path: 'navbar',
      name: 'navbar',
      meta: {
        title: 'Nav Bar',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "nav-bar" */ "@/modules/pruebas/views/NavBar.vue")
    },
    {
      path: '/',
      redirect: {name : 'navbar'} 
    }
  ]
}