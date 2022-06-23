<template>
  <div class="pokemon__box">
    <div class="pokemon__list">
      <pokemon-card
        v-for="(pokemon, index) in pokemonList"
        :key="index"
        :pokemon="pokemon"
        @on-close="handleEvent"
      ></pokemon-card>
      
    </div>
    <div v-if="isLoadingPokemons" class="pt-5 pb-4 text-center">
        Loading...
      </div>
  </div>  
</template>

<script>
import PokemonCard from '@/modules/pokemon/views/Components/PokemonCard.vue'
import useJwt from '@/jwt/useJwt'
export default {
  components: {
    PokemonCard,
  },
  data(){
    return {
      isLoading: true,
      isLoadingPokemons: false,
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
      const {data} = await useJwt.getPokemons()
      const {results: pokemons, next} = data
      this.nextAPI = next
      this.pokemonList = pokemons
    },
    handleEvent(){
      console.log('Se ejectuo el comando');
    },
    onScroll(){
      const bodyContainer = document.querySelector('.body__container')
      const pokemonBox = document.querySelector('.pokemon__box')
      bodyContainer.onscroll = async () =>{

        const bottomOfWindows = bodyContainer.scrollTop + bodyContainer.offsetHeight - 49 >= pokemonBox.offsetHeight
        if(bottomOfWindows && !this.isLoadingPokemons){
          this.isLoadingPokemons = true
          setTimeout( async () => {
            await this.loadMorePokemons()
            this.isLoadingPokemons = false
          }, 1500)
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
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
    /* column-gap: 10px;
    row-gap: 10px; */
    /* row-gap and column gap */
    gap: 30px 10px;
    grid-auto-flow: row;
  }


</style>