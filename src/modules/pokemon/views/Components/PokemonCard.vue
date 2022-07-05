<template>
  <div class="card__item">
    <div class="card__load" v-if="isLoading">
      <h1>cargando</h1>
    </div>
    <div class="card__content" v-else>
      <div class="card__tack" :class="{'active' : isFixed}" @click="fixCard">
        <i class="fa-solid fa-thumbtack"  ></i>
      </div>
      <div class="card__image" :class="{'active' : isFixed}">
        <img :src="pokemonData.sprites.front_default" alt="pokemon">
      </div>
      <div class="card__info">
        <h1>{{pokemonData.name}}</h1>
        <h2>
          <span
            v-for="(type, index) in pokemonData.types"
            :key="index"
            class="card__type mx-1"
            :class="pokemonClass(type.type.name)"
          >{{upperText(type.type.name)}}</span>
        </h2>
      </div>
      <div class="card__data" :class="{'active' : isFixed}">
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
          <poke-button @on-click="handleSeeDetail" text="Ver detalle"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//Activa validaciones de typescript
//@ts-check
import useJwt from '@/jwt/useJwt'
import PokeButton from '@/shared/components/PokeButton.vue'
import { classByType} from '@/utils/Type'
import { parseUpperText } from '@/utils/ParseData'

/**
 * @vue-prop {Object} pokemon - Datos basicos del pokemon
 * @vue-data {Boolean} isLoading- Estado de carga de los datos
 * @vue-data {Boolean} isFixed - Estado de fijación de la card
 * @vue-data {{id: string}} pokemonData - Datos del pokemon
 */
export default {
  name: 'PokemonCard',
  components: {
    PokeButton
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    }
  },
  data(){
    return {
      isLoading: true,
      pokemonData: {
        id: '0',
      },
      isFixed: false,
    }
  },
  async created(){
    this.isLoading = true
    await this.getPokemon()
    this.isLoading = false
  },
  methods: {
    /**
     * Obtener los datos del pokemon
     * @returns {Promise<void>}
     */
    async getPokemon(){
      const {data} = await useJwt.getApiPokemon(this.pokemon.url)
      this.pokemonData = data
    },
    /**
     * Emitir el evento 'on-close'
     * @returns {void}
     */
    handleSeePokemon(){
      this.$emit('on-close')
    },
    /**
     * Fijar la pokemon-card en su altura maxima
     * @returns {void}
     */
    fixCard(){
      this.isFixed= !this.isFixed
    },
    /**
     * routear a la vista 'pokemon-detail'
     * @returns {void}
     */
    handleSeeDetail(){
      this.$router.push({name: 'pokemon-detail', params: {id: this.pokemonData.id}})
    },
    /**
     * Convertir la primera letra del texto en mayuscula
     * @param {string} text - Texto de entrada
     * @returns {string}
     */
    upperText(text){
      return parseUpperText(text)
    },
    /**
     * Obtiene la clase css del pokemon dependiendo de su tipo
     * @param {string} type - Tipo del pokemon
     * @returns {string} - Clase css del pokemon
     */
    pokemonClass(type){
      return classByType(type)
    },
  }
}
</script>

<style scoped>
/* **************************** */
/*          CARD ITEM           */
/* **************************** */
.card__item{
  padding: 15px;
  margin: auto;
  background-color: var(--bg-color-primary);
  transition: all var(--time-transition) ease-in-out;
  position: relative;
  width: 100%;
  border-radius: 10px;
}

.card__item:hover .card__image{
  width: 150px;
  height: 150px;
  transform: scale(1.2) translateY(-10px);
}

/* **************************** */
/*         CARD CONTENT         */
/* **************************** */
.card__content{
  position: relative;
}

.card__tack{
  position: absolute;
  top: 0;
  right: 0;
}

.card__tack:hover{
  color: var(--bg-color-secondary);
}

.card__tack.active i{
  color: var(--bg-color-secondary);
}

.card__image{
  width: 90px;
  height: 90px;
  margin: auto;
  transition: all 0.5s ease-in-out;
  transform: scale(1.3) translateY(-10px);
  transform-origin: bottom;
}

.card__image.active{
  width: 150px;
  height: 150px;
  transform: scale(1.2) translateY(-10px);
}

.card__image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.card__info{
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
  margin-top: 8px;
}

.card__type{
  padding: 1px 8px ;
  border-radius: 25px;
  color: white;
}

/* **************************** */
/*           CARD DATA          */
/* **************************** */
.card__data{
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 0;
}

.card__item:hover .card__data{
  max-height: 120px;
}

/* Tarjeta fijada */
.card__data.active{
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
  padding-top: 20px;
  text-align: right;
}
</style>