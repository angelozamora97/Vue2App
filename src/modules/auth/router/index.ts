
export default {
  // Registro de ruta
  component: 
    () => import(/* webpackChunkName: "auth-layout" */ "@/modules/auth/layouts/AuthLayout.vue"),
  children: [
    //Registro de ruta
    {
      path: 'login',
      name: "auth-login",
      component: 
        () => import(/* webpackChunkName: "auth-login" */ "@/modules/auth/views/LogIn.vue"),
      //Parametros que se pueden usar en la ruta
      meta: {
        title: 'Log In',
        layout: 'page-layout'
      }
    },
    // Registro de ruta
    {
      path: 'signin',
      name: "auth-signin",
      component: 
        () => import(/* webpackChunkName: "auth-login" */ "@/modules/auth/views/SignIn.vue"),
      //Parametros que se pueden usar en la ruta
      meta: {
        title: 'Sign In',
        layout: 'page-layout'
      }
    },
  ]
};

// Una ruta puede coincidir con varios registros de ruta
// Ejm: /auth/login
//  - La ruta coincidita con el registro de ruta /auth y /login 