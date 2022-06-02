
export default {
  // Registro de ruta
  component: 
    () => import(/* webpackChunkName: "auth-layout" */ "@/modules/auth/layouts/AuthLayout.vue"),
  childrens: [
    //Registro de ruta
    {
      path: 'login',
      component: 
        () => import(/* webpackChunkName: "auth-login" */ "@/modules/auth/views/Login.vue"),
      //Parametros que se pueden usar en la ruta
      meta: {
        title: 'Login',
      }
    },
    // Registro de ruta
    {

    }
]


}

// Una ruta puede coincidir con varios registros de ruta
// Ejm: /auth/login
//  - La ruta coincidita con el registro de ruta /auth y /login 