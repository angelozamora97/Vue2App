<template>
  <div id="cubo__container">
    <div class="cubo__content">
      <div class="cubo__item cubo__box-one">
      </div>
      <div class="cubo__item cubo__box-two">
      </div>
      <div class="cubo__item cubo__box-three">
      </div>
      <div class="cubo__item cubo__box-four">
      </div>
      <div class="cubo__item cubo__box-five">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#cubo__container{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 56, 56);
  perspective: 1400px;
  perspective-origin: 0px -90px;
}


.cubo__content{
  width: 110px;
  height: 110px;
  background-color: aqua;
  position: relative;
  display: flex;
  /* perspective: 700px; */
  transform-style: preserve-3d;
  transform-origin: center;
  /* transform: rotateX(80deg); */
}
.cubo__content:hover{
  animation-name: rotate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.cubo__item{
  width: 110px;
  height: 110px;
  margin: auto;
  position: absolute;
}

.cubo__box-one{
  background-color: brown;
  transform-origin: left;
  transform: rotateY(-90deg);
}

.cubo__box-two{
  background-color: blue;
  transform-origin: top;
  transform: rotateX(90deg);
}
.cubo__box-three{
  background-color: rgb(0, 255, 55);
  transform-origin: right;
  transform: rotateY(90deg);
}
.cubo__box-four{
  
  background-color: rgb(247, 38, 153);
  transform-origin: bottom;
  transform: rotateX(-90deg);
}

.cubo__box-five{
  background-color: rgb(247, 191, 38);
  /* transform-origin: bottom; */
  /* transform: rotateX(-90deg); */
  transform: translateZ(110px);
}


@keyframes rotate{
  from{
    /* transform: rotate3d(65, 8 ,1, 15deg); */
    transform: rotateY(0deg);
  }
  to{
    /* transform: rotate3d(4, 8 ,10000, 95deg); */
    transform: rotateY(720deg);
  }
}
</style>