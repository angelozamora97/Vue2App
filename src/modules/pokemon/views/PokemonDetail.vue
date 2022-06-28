<template>
  <div 
  class="pk-detail__container" :class="classPokemonType">
    <div class="pk-detail__figure pk-detail__figure1" :class="lightClassPokemon"></div>
    <div class="pk-detail__figure pk-detail__figure2" :class="lightClassPokemon"></div>
    <div class="pk-detail__figure pk-detail__figure3" :class="lightClassPokemon"></div>
    <div class="pk-detail__figure pk-detail__figure4" :class="lightClassPokemon"></div>
    <div v-if="isLoading && !pokemon">Cargando</div>
    <b-row class="mx-0 pk-detail__content" v-else>
      <b-col cols="12" class="d-flex justify-content-between  icon-list mb-4">
        <i class="fa-solid fa-arrow-left icon-list__item icon__action" @click="$router.push({name : 'pokemons-list'})"></i>
        <i class="fa-solid fa-heart icon-list__item icon__action"></i>
      </b-col>
      
      <b-col cols="12" lg="7" class="">
        <h1 class="pk-detail__name">{{upperText(pokemon.name)}}</h1>
        <div class="types">
          <span class="types__item" v-for="(typeItem, index) in pokemon.types" :key="index" :class="lightClassPokemon">{{upperText(typeItem.type.name)}}</span>
        </div>
        <div class="pk-detail__image">
          <div class="pk-detail__circle"></div>
          <img :src="pokemon.sprites.other.dream_world.front_default" alt="pokemon">
        </div>
        <h2 class="pk-detail__health">2100 CP</h2>

      </b-col>
      <b-col cols="12" lg="5">
        <div class="pk-data">
          <div class="pk-data__tab-list">
            <div class="pk-data__tab" :class="{'active': tabSelected == 1}" @click="hanldeChangeTab(1)" >
              About
            </div>
            <div class="pk-data__tab" :class="{'active': tabSelected == 2}" @click="hanldeChangeTab(2)">
              Base Stats
            </div>
            <div class="pk-data__tab" :class="{'active': tabSelected == 3}" @click="hanldeChangeTab(3)">
              Evolution
            </div>
            <div class="pk-data__tab" :class="{'active': tabSelected == 4}" @click="hanldeChangeTab(4)">
              Moves
            </div>
          </div>
          <div class="tab__content">
            <div v-if="tabSelected == 1 && species" class="tab__item pt-2">
              <span>
                {{species.flavor_text_entries[0].flavor_text}}
              </span>
              <div class="d-flex justify-content-around flex-wrap pt-3 ">
                <div class="pokemon__border-radius pokemon__box-shadow py-1 px-4 m-2">
                  <span class="d-block tab__title--light" >Height</span>
                  <span class="d-block tab__number">{{parseNumber(pokemon.height)}} m</span>
                </div>
                <div class="pokemon__border-radius pokemon__box-shadow py-1 px-4 m-2">
                  <span class="d-block tab__title--light">Weight</span>
                  <span class="d-block tab__number">{{parseNumber(pokemon.weight)}} Kg</span>
                </div>
              </div>
              <div class="pt-3">
                <p class="mb-1 tab__title">
                  <span class=" tab__title--light me-1">Base Experience:</span>
                  <span class=" tab__title--color ">{{pokemon.base_experience}}</span>
                </p>
                <p class="mb-1 tab__title">
                  <span class=" tab__title--light me-1">Growth Rate:</span>
                  {{upperText(species.growth_rate.name)}}
                </p>
                <p class="mb-1 tab__title">
                  <span class="tab__title--light me-1">Habitat:</span>
                  {{upperText(species.habitat.name)}}</p>
                <p class="mb-1 tab__title">
                  <span class=" tab__title--light me-1">Gender Differences:</span>
                  <span class=" tab__title--color ">{{species.has_gender_differences ? 'YES' : 'NO'}}</span>
                </p>
              </div>
            </div>
            <div v-if="tabSelected == 2" class="tab__item pt-2">
              <!-- <line-range :value="valuePrueba" :max="max" :min="min"></line-range> -->
              <div class="tab__range-box">
                <span class="tab__range-name">HP</span>
                <span class="tab__range-value">{{pokemon.stats[0].base_stat}}</span>
                <div class="d-flex  align-items-center">
                  <line-range name="range-hp" :value="pokemon.stats[0].base_stat" :max="100" :min="0"></line-range>
                </div>
              </div>
              <div class="tab__range-box">
                <span class="tab__range-name">Attack</span>
                <span class="tab__range-value">{{pokemon.stats[1].base_stat}}</span>
                <div class="d-flex  align-items-center">
                  <line-range name="range-attack" :value="pokemon.stats[1].base_stat" :max="100" :min="0"></line-range>
                </div>
              </div>
              <div class="tab__range-box">
                <span class="tab__range-name">Defense</span>
                <span class="tab__range-value">{{pokemon.stats[2].base_stat}}</span>
                <div class="d-flex  align-items-center">
                  <line-range name="range-deffense" :value="pokemon.stats[2].base_stat" :max="100" :min="0"></line-range>
                </div>
              </div>
              <div class="tab__range-box">
                <span class="tab__range-name">Sp. Atk</span>
                <span class="tab__range-value">{{pokemon.stats[3].base_stat}}</span>
                <div class="d-flex  align-items-center">
                  <line-range name="range-sp-attack" :value="pokemon.stats[3].base_stat" :max="100" :min="0"></line-range>
                </div>
              </div>
              <div class="tab__range-box">
                <span class="tab__range-name">Sp. Def</span>
                <span class="tab__range-value">{{pokemon.stats[4].base_stat}}</span>
                <div class="d-flex  align-items-center">
                  <line-range name="range-sp-deffence" :value="pokemon.stats[4].base_stat" :max="100" :min="0"></line-range>
                </div>
              </div>
              <div class="tab__range-box">
                <span class="tab__range-name">Speed</span>
                <span class="tab__range-value">{{pokemon.stats[5].base_stat}}</span>
                <div class="d-flex  align-items-center">
                  <line-range name="range-speed" :value="pokemon.stats[5].base_stat" :max="100" :min="0"></line-range>
                </div>
              </div>


            </div>
            <div v-if="tabSelected == 3">
              <span>Tab3</span>
            </div>
            <div v-if="tabSelected == 4">
              <span>Tab4</span>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12"></b-col>
    </b-row>
  </div>
</template>

<script>
import useJwt from '@/jwt/useJwt'
import { parseUpperText } from '@/utils/ParseData'
import { classByType, lightClassByType} from '@/utils/Type'
import LineRange from '@/shared/components/LineRange.vue'
export default {
  components: {
    LineRange
  },
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
      species: null,
      tabSelected: 1,
      classPokemon: '',
      lightClassPokemon: '',
      valuePrueba: 50,
      max: 100,
      min: 0,
    }
  },
  async created(){
    console.log(this.pokemonId);
    this.isLoading = true
    await this.getPokemon()
    await this.getDataSpecies()
    this.configPokemon()
    this.isLoading = false
  },
  methods: {
    //Obtener los datos del pokemon
    async getPokemon(){
      const {data} = await useJwt.getPokemon(this.pokemonId)
      this.pokemon = data
      console.log('********* POKEMON *********');
      console.log(data);
    },
    //Obtener los datos del pokemon
    async getDataSpecies(){
      const {data} = await useJwt.getApiPokemon(this.pokemon.species.url)
      this.species = data
      console.log('********* SPECIES *********');
      console.log(this.species);
    },
    // Configurar el pokemon por su tipo
    configPokemon(){
      this.classPokemon = classByType(this.pokemon.types[0].type.name)
      this.lightClassPokemon = lightClassByType(this.pokemon.types[0].type.name)
    },
    //Cambiar el tab
    hanldeChangeTab(tab){
      this.tabSelected = tab
    },
    // Convierte la primera letra en mayuscula
    upperText(text){
      return parseUpperText(text)
    },
    // Convierte la primera letra en mayuscula
    parseNumber(number){
      return Number(number) / 10
    },
  },
  computed: {
    //Devuelve la clase del pokemon por su tipo
    classPokemonType(){
      return this.classPokemon
    }
  }

}
</script>

<style scoped>  
.pk-detail__container{
  position: relative;
  padding: 25px 30px;
  background-color: var(--bg-color-primary);
  overflow: hidden;
  border-radius: 10px;
  z-index: 0;
  transition: all var(--time-transition) ease-in-out;
}


.pk-detail__figure{
  position: absolute;
  z-index: -1;
}


.pk-detail__figure1{
  width: 150px;
  height:110px;
  top: 0;
  left: 0;
  border-radius: 10px;
  transform: translateX(-15px) translateY(-10px) rotate(-15deg);
}

.pk-detail__figure2{
  width: 190px;
  height:170px;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  transform: rotate(-15deg) translateY(30px);
  clip-path: ellipse(42% 59% at 60% 69%);
}
.pk-detail__figure3{
  width: 180px;
  height:100px;
  top: 0;
  left: 60%;
  border-radius: 10px;
  clip-path: polygon(10% 0%, 80% 0, 100% 20%, 60% 100% , 0% 50% );
  border-radius: 10px;
}
.pk-detail__figure4{
  width: 250px;
  height:80px;
  bottom: 0;
  left: 35%;
  clip-path: polygon(0% 75%, 65% 0, 95%  50%, 100% 100%, 0% 100%);
}

.pk-detail__content{
  z-index: 1;
}
/* *********************** */
/*        ICON LIST        */
/* *********************** */
.icon-list{
  margin-bottom: 10px;
}

.icon-list__item{
  color: white;
}


.pk-detail__name{
  font-size: 1.5rem;
  font-weight: 600;
  /* text-transform: uppercase; */
  padding: 0;
  color: white;
}

.pk-detail__image{
  max-width: 350px;
  width: 100%;
  /* background-color: aqua; */
  margin: auto;
  /* background-color: aqua; */
  position: relative;
  z-index: 100;
  height: 250px;
  
}

.pk-detail__image img{
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.pk-detail__circle{
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 210px;
  height: 210px;
  border-radius: 100%;
}

.pk-detail__health{
  text-align: center;
  margin-top: 12px;
  color: white;
}
/* ****************************** */
/*             TYPES              */
/* ****************************** */
.types{
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 0;
}

.types__item{
  padding: 5px 18px;
  border-radius: 25px;
  margin-right: 10px;
  color: white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.089);
}

/* ****************************** */
/*         POKEMON DATA           */
/* ****************************** */
.pk-data{
  padding: 20px;
  background-color: var(--bg-color-primary);
  transition: all var(--time-transition) ease-in-out;
  border-radius: 25px;
}

.pk-data__tab-list{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.pk-data__tab{
  padding: 5px;
  font-weight: 600;
  color: var(--text-color-secondary);
  cursor: default;
}
.pk-data__tab.active,
.pk-data__tab:hover{
  color: var(--text-color-primary);
  border-bottom: 2px solid var(--bg-color-secondary);
}

.tab__title{
  font-size: 1rem;
  font-weight: 600;
  transition: all var(--time-transition) ease-in;
}
.tab__title--light{
  color: var(--text-color-secondary);
}

.tab__title--color{
  color: var(--bg-color-secondary);
}

.tab__number{
  font-weight: 600;
}

.tab__range-box{
  display: grid;
  grid-template-columns: 70px 40px 1fr;
  margin-bottom: 10px;
}

.tab__range-name{
  color: var(--text-color-secondary);
  font-weight: 600;
}
.tab__range-value{
  font-weight: 600;
}
/* ***** EXTRA ***** */
.icon__action:hover{
  color: var(--bg-color-secondary);
}
</style>