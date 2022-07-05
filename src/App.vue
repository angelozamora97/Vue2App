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
      component: 'page-layout'  
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
  --text-color-secondary: rgb(179, 179, 179);
  --bg-color-base: rgb(240, 240, 240);
  --bg-color-primary: white;
  --bg-color-secondary: rgb(47, 130, 255);
  --button-color-switchmode: rgb(240, 240, 240);
  --button-border-color: rgb(196, 195, 195);
  --border-shadow: #0000004d;
  --time-transition: 0.5s;
}

:root.dark-mode{
  --text-color-primary : white;
  --text-color-secondary: rgb(179, 179, 179);
  --bg-color-base: #191825;
  --bg-color-primary: #22212E;
  --bg-color-secondary: #7463e4;
  --button-color-switchmode: #7463e4;
  --border-shadow: rgba(180, 180, 180, 0.247);
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
