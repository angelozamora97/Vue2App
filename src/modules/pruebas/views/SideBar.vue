<template>
  <!--  -->
  <div class="sidebar-t__box">
    <div class="sidebar-t__container">
      <ul class="sidebar-t-list">
        <li class="sidebar-t-list__item ">
          <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="sidebar-t-list__item">
          <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="sidebar-t-list__item">
          <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="sidebar-t-list__item">
          <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="sidebar-t-list__item">
          <a >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style>
.sidebar-t__box{
  width: 100%;
  height: 100%;
  background-color: rgb(56, 56, 56);
  display: flex;
  align-items: center;
  justify-content: center;
}


.sidebar-t__container{
  height: 410px;
  /* width: 70px; */
  background-color: white;
  display: flex;
  align-items: center;
  max-width: 220px;
  transition: all 0.5s ease;
  border-radius: 10px;
}

.sidebar-t-list{
  padding: 0;
  height: 350px;
  /* width: 70px; */
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
}

.sidebar-t-list__item{
  list-style: none;
  height: 70px;
  /* width: 70px; */
  /* background-color: brown; */
  display: flex;
  align-items: center;
  cursor: pointer;
}

.sidebar-t-list__item a{
  /* background-color: rgb(53, 32, 236); */
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
}

.sidebar-t-list__item a:hover{
  background-color: rgb(36, 105, 255);
}

.sidebar-t-list__item a:hover i,
.sidebar-t-list__item a:hover span{
  color: white;
}

.sidebar-t-list__item a i{
  /* background-color: cadetblue; */
  color: rgb(56, 56, 56);
  line-height: 70px;
  width: 70px;
  text-align: center;
}

.sidebar-t-list__item a span{
  /* background-color: cadetblue; */
  color: rgb(56, 56, 56);
  max-width: 0px;
  overflow: hidden;
  transition: all 0.5s ease;
  padding: 0;
}

/* .sidebar-t-list__item a:hover span{
  max-width: 110px;
} */
.sidebar-t-list:hover .sidebar-t-list__item a span{
  max-width: 110px;
  padding: 8px 16px 8px 10px;
} 

</style>