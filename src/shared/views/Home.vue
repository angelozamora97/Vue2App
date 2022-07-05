<template>
  <b-row class="mx-0 home__container">
    <b-col cols="12">
      <div class="home__logo">
        <img src="@/assets/public/pokemon-logo.png" alt="">
      </div>
    </b-col>
    <b-col class="pt-1">
      <h1 class="text-center">WELCOME</h1>
      <p class="mt-3">Esta es una pagina de prueba basado en Pokemon, podras encontrar tanto la información de los pokemoness, asi como distintos juegos y demas.
        <br>
        Se agradece cualquier tipo de observacion o comentario que pueda ayudarnos a mejorar la pagina.
      </p>
      <p class="text-center">Agradecimiento especial a PokeApi por brindarnos los servicios necesarios para poder obtener la informacion de los Pokemons</p>
    </b-col>
  </b-row>
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
.home__container{
  padding-top: 20px;
}
.home__logo{
  width: 60%;
  max-width: 500px;
  min-width: 280px;
  margin: auto;
}

.home__logo img{
  width: 100%;

}
</style>