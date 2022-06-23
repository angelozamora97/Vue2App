<template>
  <div id="card__container">
    <div class="card__content">
      <div class="card__item">
        <div class="card__image">
          <img src="@/assets/public/batman.jpg" alt="">
        </div>
        <div class="card__info">
          <h1>Bruce Wayne</h1>
          <h2>Super Hero</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#card__container{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 56, 56);
  height: 100%;
}

.card__content{
  height: 450px;
  width: 450px;
  background-color: blue;
  display: flex;
}

.card__item{
  padding: 10px;
  margin: auto;
  background-color: white;
  position: relative;
}

.card__item::after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70%;
  border-top: 1px solid brown;
  box-shadow: 10px -10px 10px blueviolet; 
}

.card__image{
  width: 170px;
  height: 170px;
}

.card__image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card__info{
  background-color: brown;
  text-align: center;
  display: flow-root;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease;
}
.card__info h1{
  margin-top: 10px;
  font-size: 1.2rem;
  margin-bottom: 5px;
}
.card__info h2{
  font-size: 1rem;
}

.card__item:hover .card__info{
  max-height: 60px;
}
</style>