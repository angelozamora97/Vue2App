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
        <div class="card__body">
          <div class="data-box">
            <div class="data-box__item">
              <span class="data-box__number">342</span>
              <span class="data-box__name">Posts</span>
            </div>
            <div class="data-box__item">
              <span class="data-box__number">342</span>
              <span class="data-box__name">Posts</span>
            </div>
            <div class="data-box__item">
              <span class="data-box__number">342</span>
              <span class="data-box__name">Posts</span>
            </div>
            
          </div>
          <div class="card__button">
            <b-button variant="primary">Ver detalle</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  /* background-color: blue; */
  display: flex;
}

.card__item{
  padding: 15px;
  margin: auto;
  background-color: white;
  position: relative;
  width: 270px;
  border-radius: 10px;
}

.card__item:hover .card__image{
  width: 150px;
  height: 150px;
  transform: scale(1.2) translateY(-10px);
}

.card__image{
  width: 90px;
  height: 90px;
  margin: auto;
  transition: all 0.5s ease-in-out;
  transform: scale(1.3) translateY(-10px);
  transform-origin: bottom;
}

.card__image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.card__info{
  /* background-color: brown; */
  text-align: center;
  display: flow-root;
}
.card__info h1{
  font-size: 1rem;
  margin-bottom: 0px;
}
.card__info h2{
  font-size: 0.9rem;
  margin-bottom: 0;
}

.card__body{
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 0;
}

.card__item:hover .card__body{
  max-height: 120px;
}

.data-box{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
}

.data-box__item{
  text-align: center;
  display: flex;
  flex-direction: column;
}

.data-box__number{
  font-size: 1rem;
  font-weight: 600;
}

.data-box__name{
  font-size: 0.9rem;
  color: rgb(172, 172, 172);
  font-weight: 600;
}

.card__button{
  margin-top: 10px;
  text-align: right;
}
</style>