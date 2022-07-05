<template>
  <b-row class="mx-0 mt-5">
    <b-col cols="11" md="9" lg="7" class="mx-auto bg-success">
      <div class="auth__logo">
        <img src="@/assets/public/pokemon-logo.png" alt="">
      </div>
      <b-form class="mt-3 py-2" @submit.prevent="handleSignin">
        <b-form-group
          id="input-group-1"
          label="Names"
          label-for="input-names"
          class="mb-3"
        >
          <b-form-input
            id="input-names"
            v-model="form.names"
            placeholder="Enter your names"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Last Names"
          label-for="input-lastnames"
          class="mb-3"
        >
          <b-form-input
            id="input-lastnames"
            v-model="form.lastnames"
            type="text"
            placeholder="Enter your lastnames"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="Email"
          label-for="input-email"
          class="mb-3"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="text"
            placeholder="Enter your email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-4"
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
        <b-form-group
          id="input-group-5"
          label="Confirm Password"
          label-for="input-confirm-password"
          class="mb-3"
        >
          <b-form-input
            id="input-confirm-password"
            v-model="form.passwordtoo"
            type="password"
            placeholder="Repite password"
            required
          ></b-form-input>
        </b-form-group>
        <div>
          <span>Ya tienes una cuenta? 
            <router-link :to="{name : 'auth-login'}">ingresa aquí</router-link>
          </span>
        </div>
        <div class="text-center mt-2">
          <b-button type="submit" variant="primary">Signin</b-button>
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
        names: '',
        lastnames: '',
        email: '',
        password: '',
        passwordtoo: '',
        }
      }
    },
    methods: {
      handleSignin(){
        console.log('Se loguea el usuario');
      }
    }
  }
</script>

<style>

</style>