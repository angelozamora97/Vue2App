<template>
  <div id="app">
    <!-- <router-view /> -->
    <component :is="component">
      <template>
        <router-view></router-view>
      </template>
    </component>
  </div>
</template>
<script>
import Home from '@/shared/views/Home.vue'
import PageLayout from '@/layouts/PageLayout.vue'
export default {
  components: {
    Home,
    PageLayout
  },
  data(){
    return {
      component: 'Home'  
    }
  },
  created(){
    this.modeProject()
  },
  methods:{
    modeProject(){
      console.log('*****************************');
      if (process.env.NODE_ENV === "development") {
        // Estamos en modo desarrollo
        console.log("Modo desarrollo");
      } else {
        // En producción
        console.log("Modo producción");
      }
      console.log('*****************************');
    }
  },
  watch:{
    $route: function(value){
      console.log('gaaaaaaaaa');
      console.log(value);
      console.log(value.meta.layout);
      this.component = value.meta.layout
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
