<template>
  <div class="d-flex">
    <side-bar></side-bar>
    <div class="body__box">
      <top-bar></top-bar>
      <div class="body__container">
        <!-- Slot donde ingresara el vue router -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/shared/components/SideBar.vue'
import TopBar from '@/shared/components/TopBar.vue'
export default {
  name:'PageLayout',
  components: {
    SideBar,
    TopBar
  },
  created(){
    console.log('PAGE LAYOUT');
  }
}
</script>

<style>
.body__box{
  /* Ancho del contenido reduciendo el tamaño del SideBar */
  width: calc(100% - 210px);
  height: 100vh;
  display: flex;
  flex-direction: column;
}


.body__container{
  /* Altura minima del contenido reduciendo el tamaño del TopBar */
  height: 100%;
  overflow-y: auto;
  padding: 25px;
  background-color: var(--bg-color-base);
  transition: all var(--time-transition) ease-in-out;
}
</style>