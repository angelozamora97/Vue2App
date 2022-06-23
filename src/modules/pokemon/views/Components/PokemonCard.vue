<template>
  <div class="card__item">
    <div class="card__load" v-if="isLoading">
      <h1>cargando</h1>
    </div>
    <div class="card__content" v-else>
      <div class="card__image">
        <img :src="pokemonData.sprites.front_default" alt="pokemon">
      </div>
      <div class="card__info">
        <h1>{{pokemonData.name}}</h1>
        <h2>
          <span v-for="(type, index) in pokemonData.types" :key="index" class="mx-1">{{type.type.name}}</span>
        </h2>
      </div>
      <div class="card__body">
        <div class="data-box">
          <div class="data-box__item">
            <span class="data-box__number">{{pokemonData.stats[0].base_stat}}</span>
            <span class="data-box__name">Health</span>
          </div>
          <div class="data-box__item">
            <span class="data-box__number">{{pokemonData.base_experience}}</span>
            <span class="data-box__name">Experience</span>
          </div>
          <div class="data-box__item">
            <span class="data-box__number">{{pokemonData.stats[1].base_stat}}</span>
            <span class="data-box__name">Ataque</span>
          </div>
          
        </div>
        <div class="card__button">
          <b-button variant="primary" @click="handleSeeDetail">Ver detalle</b-button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import useJwt from '@/jwt/useJwt'
export default {
  name: 'PokemonCard',
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
    },
    handleSeePokemon(){
      this.$emit('on-close')
    },
    handleSeeDetail(){
      this.$router.push({name: 'pokemon-detail', params: {id: this.pokemonData.id}})
    }
  }
}
</script>

<style scoped>

.card__item{
  padding: 15px;
  margin: auto;
  background-color: var(--bg-color-primary);
  position: relative;
  /* width: 270px; */
  width: 100%;
  border-radius: 10px;
}

.card__item:hover .card__image{
  width: 150px;
  height: 150px;
  transform: scale(1.2) translateY(-10px);
}

.card__image{
  width: 90px;
  height: 90px;
  margin: auto;
  transition: all 0.5s ease-in-out;
  transform: scale(1.3) translateY(-10px);
  transform-origin: bottom;
}

.card__image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.card__info{
  /* background-color: brown; */
  text-align: center;
  display: flow-root;
}
.card__info h1{
  font-size: 1rem;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: 600;
}
.card__info h2{
  font-size: 0.9rem;
  margin-bottom: 0;

}

.card__body{
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 0;
}

.card__item:hover .card__body{
  max-height: 120px;
}

.data-box{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
}

.data-box__item{
  text-align: center;
  display: flex;
  flex-direction: column;
}

.data-box__number{
  font-size: 1rem;
  font-weight: 600;
}

.data-box__name{
  font-size: 0.9rem;
  color: rgb(150, 150, 150);
  font-weight: 600;
}

.card__button{
  margin-top: 10px;
  text-align: right;
}
</style>