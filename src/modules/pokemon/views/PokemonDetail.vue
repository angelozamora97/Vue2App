<template>
  <div>
    hola
  </div>
</template>

<script>
import useJwt from '@/jwt/useJwt'
export default {
  props: {
    pokemonId: {
      type: String,
      required: true,
    }
  },
  data(){
    return {
      isLoading: true,
      pokemon: null,
    }
  },
  async created(){
    console.log(this.pokemonId);
    this.isLoading = true
    await this.getPokemon()
    this.isLoading = false
  },
  methods: {
    async getPokemon(){
      const {data} = await useJwt.getPokemon(this.pokemonId)
      console.log(data);
      const pokemon = data
    }
  }

}
</script>

<style>

</style>