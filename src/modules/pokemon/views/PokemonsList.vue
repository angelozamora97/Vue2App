<template>
  <div>
    Cargando
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  created(){
    this.loadPokemons()
  },
  methods: {
    async loadPokemons(){
      console.log('cargando pokemons');
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
      const {results: pokemons, next} = data
    
      console.log(next);
      console.log(pokemons);
    }
  }
}
</script>

<style>

</style>