<template>
  <div class="pokemon__container">
    <b-card>
      <div class="pokemon__image">
        <img src="" alt="">
      </div>
      <h1 class="pokemon__name">Nombre</h1>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    }
  },
  data(){{
    return {
      pokemon: {
        name: '',
        image: ''
      }
    }
  }}
}
</script>

<style>

</style>