<template>
  <div class="sidebar__container">
    <div class="sidebar__logo">
      <img src="@/assets/public/pokemon-logo.png" alt="">
    </div>
    <div class="menu__container">
      <router-link :to="{name : 'pokemons-list'}" class="menu__item">
        <i class="fa-solid fa-paw me-2"></i>
        <span>Pokemons</span>
      </router-link>
      <router-link :to="{name : 'questions-list'}" class="menu__item">
        <i class="fa-solid fa-circle-question me-2"></i>
        <span>Questions</span>
      </router-link>
      <router-link :to="{name : 'navbar'}" class="menu__item">
        <i class="fa-solid fa-circle-question me-2"></i>
        <span>Pruebas</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style>
.sidebar__container{
  width: 210px;
  height: 100vh;
  top: 0;
  left: 0;
  position: sticky;
  background-color: var(--bg-color-secondary);
}

.sidebar__logo{
  margin-top: 20px;
  height: 50px;
  text-align: center;
}

.sidebar__logo img{
  height: 100%;
  object-fit: cover;
}

.menu__container{
  margin-top: 25px;
}

.menu__item{
  padding: 8px 10px 8px 15px;
  display: block;
  text-decoration: none;
  cursor: default;
  color: var(--text-color-primary);
}
.menu__item:hover, 
.menu__item.router-link-active{
  background-color: var(--bg-color-primary);
  color: white;
}

.menu__link{
  text-decoration: none;
  color: var(--text-color-primary);
}
</style>