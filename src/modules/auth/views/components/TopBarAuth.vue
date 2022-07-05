<template>
  <div id="topbar-auth__container">
    <div class="topbar-auth__logo" @click="$router.push({name: 'home'})">
      <img src="@/assets/public/pokemon-logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBarAuth',
}
</script>

<style>
#topbar-auth__container{
  height: 50px;
  background-color: var(--bg-color-base);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 10px;
}

.topbar-auth__logo{
  height: 35px;
  cursor: pointer;
}
.topbar-auth__logo img{
  height: 100%;
}
</style>