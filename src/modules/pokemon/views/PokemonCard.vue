<template>
  <div class="pokemon__container">
    <b-card class="h-100">
      <span v-if="isLoading && !pokemonData">cargando</span>
      <div v-else>
        <div class="pokemon__image">
          <!-- <img :src="pokemonData.sprites? pokemonData.sprites.front_default : ''" alt="pokemon"> -->
          <img :src="pokemonData.sprites.front_default" alt="pokemon">
        </div>
        <h1 class="pokemon__name text-center mt-3 mb-2">{{pokemonData.name}}</h1>
      </div>
    </b-card>
  </div>
</template>

<script>
import useJwt from '@/jwt/useJwt'
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    }
  },
  data(){
    return {
      isLoading: true,
      pokemonData: null,
    }
  },
  async created(){
    this.isLoading = true
    await this.getPokemon()
    this.isLoading = false
  },
  methods: {
    async getPokemon(){
      const {data} = await useJwt.getApiPokemon(this.pokemon.url)
      this.pokemonData = data
    }
  }
}
</script>

<style>
.pokemon__image{
  width: 100%;
  max-width: 150px;
  height: 130px;
  margin: auto;
  background-color: aqua;
}

.pokemon__image img{
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.pokemon__name {
  font-size: 1rem;
  text-transform: uppercase;
}
</style>