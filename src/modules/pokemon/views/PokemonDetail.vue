<template>
  <div class="pk-detail__container">
    <div class="pk-detail__figure pk-detail__figure1"></div>
    <div class="pk-detail__figure pk-detail__figure2"></div>
    <div class="pk-detail__figure pk-detail__figure3"></div>
    <div class="pk-detail__figure pk-detail__figure4"></div>
    <div v-if="isLoading && !pokemon">Cargando</div>
    <b-row class="mx-0 pk-detail__content" v-else>
      <b-col cols="12" class="d-flex justify-content-between px-0 icon-list">
        <i class="fa-solid fa-arrow-left icon-list__item"></i>
        <i class="fa-solid fa-heart icon-list__item"></i>
      </b-col>
      <h1 class="pk-detail__name">Charmander</h1>
      <div class="types">
        <span class="types__item">Fire</span>
      </div>
      <!-- <h1 class="pk-detail__name">{{pokemon.name}}</h1> -->
      <b-col cols="12" lg="7" class="">
        <div class="pk-detail__image">
          <div class="pk-detail__circle"></div>
          <img :src="pokemon.sprites.other.dream_world.front_default" alt="pokemon">
        </div>
        <h2 class="pk-detail__health">2100 CP</h2>
        <button @click="probar">asd</button>
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
          <div class="pk-data__content">
            <div v-if="tabSelected == 1">
              <span>Tab1</span>
            </div>
            <div v-if="tabSelected == 2">
              <span>Tab2</span>
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
      tabSelected: 1,
    }
  },
  async created(){
    console.log(this.pokemonId);
    this.isLoading = true
    await this.getPokemon()
    this.isLoading = false
  },
  methods: {
    //Obtener los datos del pokemon
    async getPokemon(){
      const {data} = await useJwt.getPokemon(this.pokemonId)
      console.log(data);
      this.pokemon = data
    },
    //Cambiar el tab
    hanldeChangeTab(tab){
      this.tabSelected = tab
    },
    //Prueba del cambio dark mode
    probar(){
      document.documentElement.classList.toggle('dark-mode')
    }
  }

}
</script>

<style scoped>  
.pk-detail__container{
  position: relative;
  padding: 25px 30px;
  background-color: #FC6C6D;
  overflow: hidden;
  /* #FC8081 */
  border-radius: 10px;
  z-index: 0;
}

.pk-detail__figure{
  position: absolute;
  background-color: #FC8081;
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
  background-color: #FC8081;
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
  padding: 5px 15px;
  background-color: aqua;
  border-radius: 25px;
  margin-right: 10px;
}

/* ****************************** */
/*         POKEMON DATA           */
/* ****************************** */
.pk-data{
  padding: 20px;
  background-color: var(--bg-color-secondary);
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
  border-bottom: 2px solid var(--bg-color-primary);
}

button{
  background-color: var(--color);
}
</style>