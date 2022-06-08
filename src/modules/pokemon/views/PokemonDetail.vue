<template>
  <div>
    <b-card>
      <div v-if="isLoading && !pokemon">Cargando</div>
      <b-row class="mx-0" v-else>
        <h1>{{pokemon.name}}</h1>
        <b-col cols="12" lg="7" class="bg-warning">
          <div class="pokemon-detail__image">
            <img :src="pokemon.sprites.other.dream_world.front_default" alt="pokemon">
          </div>
        </b-col>
        <b-col cols="12" lg="5"></b-col>
        <b-col cols="12"></b-col>
      </b-row>
    </b-card>
    
  </div>
</template>

<script>
import useJwt from '@/jwt/useJwt'
export default {
  props: {
    pokemonId: {
      type: Number,
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
      this.pokemon = data
    }
  }

}
</script>

<style scoped>  
.pokemon-detail__image{
  max-width: 350px;
  width: 100%;
  margin: auto;
  background-color: aqua;
}

.pokemon-detail__image img{
  width: 100%;
  object-fit: cover;
}
</style>