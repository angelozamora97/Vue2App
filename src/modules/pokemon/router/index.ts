import { Route } from "vue-router";

export default {
  component: 
    () => import(/* webpackChunkName: "pokemon-layout" */ "@/modules/pokemon/layouts/PokemonLayout.vue"),
  children: [
    {
      path: 'pokemons-list',
      name: 'pokemons-list',
      meta: {
        title: 'Pokemon List',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "pokemon-list" */ "@/modules/pokemon/views/PokemonsList.vue")
    },
    {
      path: 'pokemon-detail/:id',
      name: 'pokemon-detail',
      meta: {
        title: 'Pokemon Detalle',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "pokemon-list" */ "@/modules/pokemon/views/PokemonDetail.vue"),
      props: (route:Route) => {
        const pokemonId = Number(route.params.id)
        return {pokemonId}
      }
    },
    {
      path: '/',
      redirect: {name : 'pokemons-list'} 
    }
  ]
}