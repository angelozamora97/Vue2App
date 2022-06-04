
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
      path: '/',
      redirect: {name : 'pokemons-list'} 
    }
  ]
}