<template>
  <div class="sidebar__container">
    <div class="sidebar__logo">
      <img src="@/assets/public/pokemon-logo.png" alt="">
    </div>
    <div class="menu__container">
      <div class="menu__item">
        <i class="fa-solid fa-paw me-2"></i>
        <router-link :to="{name : 'pokemons-list'}" class="menu__link">Pokemons</router-link>
      </div>
      <div class="menu__item">
        <i class="fa-solid fa-circle-question me-2"></i>
        <router-link :to="{name : 'questions-list'}" class="menu__link">Questions</router-link>
      </div>
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
  background-color: aqua;
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
  background-color: blueviolet;
  padding: 8px;
}

.menu__link{
  text-decoration: none;
  color: white;
}
</style>