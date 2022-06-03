<template>
  <b-row class="mx-0 mt-5">
    <b-col cols="11" md="9" lg="7" class="mx-auto bg-success">
      <div class="auth__logo">
        <img src="@/assets/auth/pokemon-logo.png" alt="">
      </div>
      <b-form class="mt-4 py-2" @submit.prevent="handleLogin">
        <b-form-group
          id="input-group-1"
          label="Email"
          label-for="input-email"
          class="mb-3"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Password"
          label-for="input-password"
          class="mb-3"
        >
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <div>
          <span>No tienes una cuenta? 
            <router-link :to="{name : 'auth-signin'}">registrate aquí</router-link>
          </span>
        </div>
        <div class="text-center mt-2">
          <b-button type="submit" variant="primary">Login</b-button>
        </div>
      </b-form>
      
    </b-col>
  </b-row>
</template>

<script>
export default {
  data(){
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    handleLogin(){
      console.log();
    }
  }
}
</script>

<style>

</style>