<template>
  <div>
    <top-bar-auth></top-bar-auth>
    <b-row class="mx-0 auth__container">
      <b-col cols="12" lg="7" class="px-0 asdasd">
        <div class="auth__img">
          <img src="@/assets/auth/auth-img.jpg" alt="">
        </div>
      </b-col>
      <b-col cols="12" lg="5" class="auth__content  p-3">
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopBarAuth from '@/modules/auth/views/components/TopBarAuth.vue'
export default {
  name: 'AuthLayout',
  components: {
    TopBarAuth
  },
  created(){
    console.log('se creo auth layout');
  }  
}
</script>

<style>
.auth__container{
  background-color: white;
}
.auth__img{
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  clip-path: polygon(0% 0%,  100% 0%, 89% 40%, 95% 56%, 80% 90%, 84% 100%, 0% 100%)
}

.auth__img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  
}
.auth__content{
  height: calc(100vh - 50px);
  overflow: auto;

}

.auth__logo{
  height: 60px;
  text-align: center;
  
}

.auth__logo img{
  height: 100%;
  object-fit: cover;
}
</style>