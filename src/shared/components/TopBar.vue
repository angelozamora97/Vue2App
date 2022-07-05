<template>
  <div class="topbar__container">
    <div class="topbar__content">
      <button @click="changeMode" class="switch-mode">
        <span><i class="fa-solid fa-sun"></i></span>
        <span><i class="fa-solid fa-moon"></i></span>
        <div class="switch-mode__circle"></div>
      </button>
      <div class="d-flex align-items-center">
        <button @click="$router.push({name: 'auth-login'})">Ingresar</button>
        <div class="topbar__user">
          <img src="@/assets/public/pokemon-user.svg" alt="">
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  methods: {
    // Cambia el modo de la web entre Dark y Light
    changeMode(){
      const buttonSwitch = document.querySelector('.switch-mode')
      buttonSwitch.classList.toggle('switch-mode__dark')
      document.documentElement.classList.toggle('dark-mode')
    }
  }
}
</script>

<style>
.topbar__container{
  width: 100%;
  padding: 20px 25px 5px 25px; 
  background-color: var(--bg-color-base);
  transition: all var(--time-transition) ease-in-out;
  height: 80px;
  /* position: sticky; */
  z-index: 3;
  /* left: 0;
  top: 0; */
  
}

.topbar__content{
  height: 55px;
  background-color: aqua;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-radius: 25px;
  background-color: var(--bg-color-primary);
  transition: all var(--time-transition) ease-in-out;
  justify-content: space-between;
}

.switch-mode{
  display: flex;
  position: relative;
  border: none;
  outline: none;
  padding: 0;
  border-radius: 25px;
  overflow: hidden;
  transition: all var(--time-transition) ease-in-out;
}

.switch-mode span{
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: none;
}


.switch-mode span{
  color: white;
}

.switch-mode{
  background-color: rgba(250, 198, 26, 0.836);
}

.switch-mode__dark{
  background-color: #191825;
}

.switch-mode__circle{
  position: absolute;
  height: 28px;
  width: 28px;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: var(--button-color-switchmode);
  border-radius: 100%;
  transform: translateX(32px);
  transition: all var(--time-transition) ease-in-out;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.295);
}

.switch-mode__dark .switch-mode__circle{
  transform: translateX(0px) !important;
}

/* **************** */
/*   TOP BAR USER   */
/* **************** */
.topbar__user{
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background-color: var(--bg-color-base);
}

.topbar__user img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
}
</style>