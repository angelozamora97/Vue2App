<template>
  <b-row class="mx-auto bg-danger">
    <b-col cols="12" lg="5">
      imagen
    </b-col>
    <b-col cols="12" lg="7" class="auth__container bg-warning p-3">
      <router-view></router-view>
    </b-col>
  </b-row>
</template>

<script>
export default {

}
</script>

<style>
.auth__container{
  min-height: 100vh;

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