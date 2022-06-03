<template>
  <div id="app">
    <!-- El tag 'component' sera remplazado por el componente elegido -->
    <!-- El componente elegido debe ser importando en este componente padre o en el main de manera global -->
    <component :is="component">
      <template>
        <router-view></router-view>
      </template>
    </component>
  </div>
</template>
<script>

export default {
  data(){
    return {
      component: 'simple-layout'  
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
    // Verifica los cambios del route para poder obtener el nombre del componente base padre del meta
    $route: function(value){
      this.component = value.meta.layout || 'page-layout'
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
