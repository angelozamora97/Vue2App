<template>
  <div >
    <div class="bg-warning">
      <b-container fluid="xl">
        <div class="d-flex justify-content-between bg-success">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <b-button variant="primary" @click="$router.push({ name: 'auth-login'})">Login</b-button>
          </div>
        </div>
        
      </b-container>
    </div>
    <b-row class="mx-0 bg-danger">
      <b-col cols="12">
        Home page
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created(){
    console.log('SE CREOOOOOOOO');
  }
}
</script>

<style>

</style>