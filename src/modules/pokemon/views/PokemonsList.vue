<template>
  <div>
    <div class="pokemon__list">
      <pokemon-card
        v-for="(pokemon, index) in pokemonList"
        :key="index"
        :pokemon="pokemon"
        @on-close="handleEvent"
      ></pokemon-card>
    </div>
  </div>  
</template>

<script>
import PokemonCard from '@/modules/pokemon/views/PokemonCard.vue'
import useJwt from '@/jwt/useJwt'
export default {
  components: {
    PokemonCard,
  },
  data(){
    return {
      isLoading: true,
      nextAPI: '',
      pokemonList: [],
    }
  },
  async created(){
    this.isLoading = true
    await this.loadPokemons()
    this.isLoading = false
  },
  mounted(){
    this.onScroll()
  },
  methods: {
    async loadPokemons(){
      console.log('cargando pokemons');
      const {data} = await useJwt.getPokemons()
      const {results: pokemons, next} = data
      this.nextAPI = next
      this.pokemonList = pokemons
    },
    handleEvent(){
      console.log('Se ejectuo el comando');
    },
    onScroll(){
      window.onscroll = async () =>{
        const bottomOfWindows = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if(bottomOfWindows){
          await this.loadMorePokemons()
        }
      }
    },
    async loadMorePokemons(){
      const {data} = await useJwt.getApiPokemon(this.nextAPI)
      const {results: pokemons, next} = data
      this.nextAPI = next
      this.pokemonList = this.pokemonList.concat(pokemons)
    }
  }
}
</script>

<style scoped>
  .pokemon__list{
    display: grid;
    /* grid-auto-rows: 210px; */
    /* grid-template-columns: repeat(4,1fr); */
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
    /* column-gap: 10px;
    row-gap: 10px; */
    /* row-gap and column gap */
    gap: 20px 10px;
    grid-auto-flow: row;
  }


</style>