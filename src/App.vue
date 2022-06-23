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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color-primary);
  box-sizing: border-box;
}

:root{
  --text-color-primary : #2c3e50;
  --text-color-secondary: rgb(196, 195, 195);
  --bg-color-primary: rgb(21, 115, 255);
  --bg-color-secondary: white;
  --bg-color-terciary: rgb(240, 240, 240);
}

:root.dark-mode{
  --text-color-primary : white;
  --text-color-secondary: rgb(196, 195, 195);
  --bg-color-primary: #6959CA;
  --bg-color-secondary: #22212E;
  --bg-color-terciary: #191825;
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
