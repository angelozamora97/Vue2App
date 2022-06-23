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
      path: 'sidebar',
      name: 'sidebar',
      meta: {
        title: 'Side Bar',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "side-bar" */ "@/modules/pruebas/views/SideBar.vue")
    },
    {
      path: 'flybox',
      name: 'flybox',
      meta: {
        title: 'Fly Box',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "fly-box" */ "@/modules/pruebas/views/FlyBox.vue")
    },
    {
      path: 'cubo',
      name: 'cubo',
      meta: {
        title: 'Fly Box',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "cubo" */ "@/modules/pruebas/views/Cubo.vue")
    },
    {
      path: 'cubo3D',
      name: 'cubo3D',
      meta: {
        title: 'Fly Box',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "cubo-3D" */ "@/modules/pruebas/views/Cubo3D.vue")
    },
    {
      path: 'card',
      name: 'card',
      meta: {
        title: 'Fly Box',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "ccard */ "@/modules/pruebas/views/Card.vue")
    },
    {
      path: '/',
      redirect: {name : 'navbar'} 
    }
  ]
}