<template>
  <div class="pokemon-card__container">
    <b-card class="h-100">
      <span v-if="isLoading && !pokemonData">cargando</span>
      <div v-else>
        <div class="pokemon-card__icon text-end" @click="handleSeePokemon">
          <i class="fa-solid fa-magnifying-glass-location"></i>
        </div>
        <div class="pokemon-card__image">
          <!-- <img :src="pokemonData.sprites? pokemonData.sprites.front_default : ''" alt="pokemon"> -->
          <img :src="pokemonData.sprites.front_default" alt="pokemon">
        </div>
        <h1 class="pokemon-card__name text-center mt-3 mb-2">{{pokemonData.name}}</h1>
        <button @click="handleSeeDetail">Ver detalle</button>
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
      console.log(data);
    },
    handleSeePokemon(){
      console.log('Llegoo al evento');
      this.$emit('on-close')
    },
    handleSeeDetail(){
      console.log('Ver detalle')
      this.$router.push({name: 'pokemon-detail', params: {id: this.pokemonData.id}})
    }
  }
}
</script>

<style>
.pokemon-card__icon{
  z-index: 9999;
  background-color: brown
}
.pokemon-card__image{
  width: 100%;
  max-width: 150px;
  height: 130px;
  margin: auto;
  background-color: aqua;
}

.pokemon-card__image img{
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.pokemon-card__name {
  font-size: 1rem;
  text-transform: uppercase;
}
</style>