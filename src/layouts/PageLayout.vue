<template>
  <div class="d-flex">
    <!-- Slot donde ingresara el vue router -->
    <side-bar></side-bar>
    <div class="body__box bg-warning">
      <top-bar></top-bar>
      <div class="body__container bg-danger">
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
}
</style>