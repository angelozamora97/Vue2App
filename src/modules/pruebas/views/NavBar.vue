<template>
  
  <div class="nabvar__box">
    <div class="navbar__container">
      <ul class="navbar-list">
        <li class="navbar-list__item active">
          <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>

        </li>
        <li class="navbar-list__item">
           <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="navbar-list__item">
           <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="navbar-list__item">
           <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="navbar-list__item">
           <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <div class="navbar-list__indicator">
        </div>
      </ul>
    </div>
  </div>
</template>

<script>


export default {

  mounted(){
    const listItem = document.querySelectorAll('.navbar-list__item')

    listItem.forEach( item => {
      item.addEventListener('click', ()=> {
        this.setActive(item)
      })
    })
  },
  methods: {
    setActive(item){
      const listItem = document.querySelectorAll('.navbar-list__item')
      listItem.forEach(itemList => {
        itemList.classList.remove('active')
      })

      item.classList.add('active')
    }
  }
}
</script>

<style scoped>
.nabvar__box{
  width: 100%;
  height: 100%;
  background-color: rgb(56, 56, 56);
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__container{
  position: relative;
  width: 430px;
  height: 70px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-list{
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  width: 350px;
}

.navbar-list__indicator{
  box-sizing: border-box;
  height: 70px;
  width: 70px;
  position: absolute;
  background-color: rgb(28, 238, 109);
  top: -50%;
  border-radius: 100%;
  z-index: 1;
  border: 7px solid rgb(56, 56, 56);
  transition: all 0.5s ease;
}
.navbar-list__indicator::before{
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  top: 50%;
  left: -17px;
  border-top-right-radius: 100%;
  box-shadow: 4px -4px 0px  1px rgb(56, 56, 56);
}

.navbar-list__indicator::after{
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  top: 50%;
  right: -17px;
  border-top-left-radius: 100%;
  box-shadow: -4px -4px 0px  1px rgb(56, 56, 56);
}

.navbar-list__item{
  list-style: none;
  width: 70px;
  height: 70px;
}

.navbar-list__item a{
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  cursor: pointer;
}

.navbar-list__item a i{
  line-height: 70px;
  display: block;
  transition: all 0.6s ease;
  font-size: 1.2rem;
  z-index: 100;
}

.navbar-list__item a span{
  position: absolute;
  bottom: 0%;
  width: 100%;
  text-align: center;
  opacity: 0;
  transition-delay: 0.5s;
  transition: all 0.5s ease;
  font-size: 0.75rem;
}

.navbar-list__item.active a i {
  transform: translateY(-35px);
  color: white;
}

.navbar-list__item.active a span {
  opacity: 1;
  transform: translateY(-10px);
}

.navbar-list__item.active:nth-child(1) ~ div{
  transform: translateX(0px);
}
.navbar-list__item.active:nth-child(2) ~ div{
  transform: translateX(70px);
}

.navbar-list__item.active:nth-child(3) ~ div{
  transform: translateX(140px);
}
.navbar-list__item.active:nth-child(4) ~ div{
  transform: translateX(210px);
}
.navbar-list__item.active:nth-child(5) ~ div{
  transform: translateX(280px);
}

</style>